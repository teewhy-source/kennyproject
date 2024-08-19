import React, { useState, useEffect } from 'react';

const TypingEffect = ({ texts, speed = 150, pause = 2000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopCount, setLoopCount] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[currentTextIndex];
            const updatedText = isDeleting
                ? currentText.substring(0, displayedText.length - 1)
                : currentText.substring(0, displayedText.length + 1);

            setDisplayedText(updatedText);

            if (!isDeleting && updatedText === currentText) {
                setTimeout(() => setIsDeleting(true), pause);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                setLoopCount((prev) => prev + 1);
            }
        };

        const typingSpeed = isDeleting ? speed / 2 : speed;
        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, texts, currentTextIndex, speed, pause]);

    return <span>{displayedText}</span>;
};

export default TypingEffect;
