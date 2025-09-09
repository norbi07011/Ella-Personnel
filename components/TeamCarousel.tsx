import React, { useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { getTeamData } from '../data/teamData';
import { useTranslation } from '../i18n';

const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;

const TeamCard: React.FC<ReturnType<typeof getTeamData>[0]> = ({ name, role, email, phone, image }) => {
    return (
        <div className="w-[300px] bg-[#1e213a] rounded-2xl overflow-hidden border border-blue-500/20 shadow-xl shadow-black/40">
            <img src={image} alt={name} className="w-full h-40 object-cover pointer-events-none" />
            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white">{name}</h3>
                <p className="text-cyan-400 text-sm mb-4">{role}</p>
                <div className="flex justify-center space-x-4">
                    <a href={`mailto:${email}`} className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full">
                        <MailIcon />
                    </a>
                    <a href={`tel:${phone}`} className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full">
                        <PhoneIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

const TeamCarousel: React.FC = () => {
    const { t } = useTranslation();
    const teamData = getTeamData(t);
    const carouselRef = useRef(null);
    const rotateY = useMotionValue(0);
    const dragStartRotation = useRef(0);
    const isDragging = useRef(false);

    useAnimationFrame((time, delta) => {
        if (!isDragging.current) {
            const degreesPerSecond = 8;
            const moveBy = (degreesPerSecond * delta) / 1000;
            rotateY.set(rotateY.get() + moveBy);
        }
    });

    const onDragStart = () => {
        isDragging.current = true;
        rotateY.stop();
        dragStartRotation.current = rotateY.get();
    };
    
    const onDragEnd = () => {
        isDragging.current = false;
    };

    const onDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number; y: number; }; }) => {
        const sensitivity = 0.35;
        rotateY.set(dragStartRotation.current + info.offset.x * sensitivity);
    };

    const numItems = teamData.length;
    const anglePerItem = 360 / numItems;
    const radius = 400;

    return (
        <div
            ref={carouselRef}
            style={{
                perspective: '1500px',
                width: '100%',
                height: '500px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'grab'
            }}
        >
            <motion.div
                style={{
                    width: '300px',
                    height: 'auto',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    rotateY: rotateY,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragStart={onDragStart}
                onDrag={onDrag}
                onDragEnd={onDragEnd}
                whileTap={{ cursor: "grabbing" }}
            >
                {teamData.map((member, index) => {
                    const itemAngle = anglePerItem * index;
                    return (
                        <motion.div
                            key={index}
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                transformOrigin: 'center',
                                transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                            }}
                        >
                            <TeamCard {...member} />
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default TeamCarousel;