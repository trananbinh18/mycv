// PhysicsTagCloud.jsx
import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { Tag } from 'antd'
import Icon from "@ant-design/icons"
import { iconMap } from "../../iconMap.js"
import { colorSecondary } from '../../vars.module.css'
import style from './style.module.css'



const PhysicsTagCloud = ({ imageUrl, tags }) => {
  const containerRef = useRef(null);
  const tagRefs = useRef([]);

  useEffect(() => {
    if (!containerRef.current || !tags.length) return;

    const { Engine, World, Bodies, Runner } = Matter;

    const engine = Engine.create();
    const world = engine.world;
    const runner = Runner.create();

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Physics bounds (walls + ground)
    const thickness = 200;
    const ground = Bodies.rectangle(
      width / 2,
      height + thickness / 2,
      width + thickness * 2,
      thickness,
      { isStatic: true }
    );
    const leftWall = Bodies.rectangle(
      -thickness / 2,
      height / 2,
      thickness,
      height * 2,
      { isStatic: true }
    );
    const rightWall = Bodies.rectangle(
      width + thickness / 2,
      height / 2,
      thickness,
      height * 2,
      { isStatic: true }
    );

    World.add(world, [ground, leftWall, rightWall]);

    // Create bodies for each tag
    const bodies = [];

    tagRefs.current.forEach((el, index) => {
      if (!el) return;

      const tagRect = el.getBoundingClientRect();
      const w = tagRect.width || 80;
      const h = tagRect.height || 32;

      // Start positions (random X, above the top)
      const x = Math.random() * (width - w) + w / 2;
      const y = -50 - index * 30;

      const body = Bodies.rectangle(x, y, w, h, {
        restitution: 0.6,    // bounciness
        friction: 0.3,
        frictionAir: 0.02,
      });

      bodies.push({ body, el });
      World.add(world, body);

      // Make sure span is absolutely positioned
      el.style.position = "absolute";
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.transform = "translate(-50%, -50%)";
    });

    Runner.run(runner, engine);

    let animationFrameId;

    const update = () => {
      bodies.forEach(({ body, el }) => {
        el.style.left = `${body.position.x}px`;
        el.style.top = `${body.position.y}px`;
        el.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
    };
  }, [tags]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "400px",
        borderRadius: "16px",
        overflow: "visible",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {tags.map((tag, index) => (
        
        <Tag 
          key={tag + index}
          ref={(el) => (tagRefs.current[index] = el)}
          className={style.techTag}
          icon={<Icon component={iconMap[tag]} />} 
          color={colorSecondary}>
        {tag}
        </Tag>
      ))}
    </div>
  );
};
export default PhysicsTagCloud;