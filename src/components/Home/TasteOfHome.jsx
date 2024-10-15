import React, { useEffect, useState } from 'react';

const TasteOfHome = () => {
  const constantText = "Kraving delicious food but ";
  const phrases = [
    "don’t have the time or skills to cook it yourself?",
    "don’t have the time or skills to cook it yourself?",
    "Kraving the taste of home-cooked meals when you are away from your family?",
    "Kraving the taste of home-cooked meals when you are away from your family?",
    "Whether you're pressed for time or simply Krave the taste of home?",
    "Whether you're pressed for time or simply Krave the taste of home?",
    "Let us bring your culinary desires to you.",
    "Let us bring your culinary desires to you."
  ];

  const [textLoaded, setTextLoaded] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 50;
  const deletingSpeed = 30;
  const pauseAfterTyping = 2000;
  const loadingDuration = 1000;

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setTextLoaded(true);
      setDisplayText(phrases[0]);
    }, loadingDuration);
    return () => clearTimeout(textTimer);
  }, []);

  useEffect(() => {
    if (!textLoaded) return;

    const timer = setTimeout(() => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        setDisplayText(prev => {
          const newText = prev.slice(0, -1);
          if (newText.length === 0) {
            setIsDeleting(false);
            setCurrentPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
          }
          return newText;
        });
      } else {
        setDisplayText(prev => {
          const newText = currentPhrase.slice(0, prev.length + 1);
          if (newText.length === currentPhrase.length) {
            setTimeout(() => {
              setIsDeleting(true);
            }, pauseAfterTyping);
          }
          return newText;
        });
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex, phrases, textLoaded]);

  return (
    <div id="TasteOfHome" className={` section1Container ${textLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-16'} flex flex-col items-center justify-center h-screen p-8 rounded-lg text-white text-center transition-all duration-800`}>
      <h1 className="Tfont text-4xl font-bold mb-4">A TASTE OF HOME</h1>
      <p className="text-xl mb-6">{constantText}</p>
      <p className="text-xl mb-6">{displayText}</p>
      <div className="flex justify-center space-x-8">
        <button className="bg-transparent border-2 border-red-400 text-red-400 py-2 px-4 transition duration-500 hover:bg-red-400 hover:text-white hover:shadow-lg hover:scale-110">
          Learn More
        </button>
        <button className="bg-transparent border-2 border-white text-white py-2 px-4 transition duration-500 hover:bg-white hover:text-black hover:shadow-lg hover:scale-110">
          See How It Works
        </button>
      </div>
    </div>
  );
};

export default TasteOfHome;
