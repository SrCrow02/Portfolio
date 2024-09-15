import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

// Define the type for the props
interface TiltImageProps {
  imageUrl: string;
  className?: string;
}

const TiltImage: React.FC<TiltImageProps> = ({ imageUrl, className }) => {
  const tiltRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,     
        speed: 1000,   
        glare: true,   
        "max-glare": 0.5, 
      });
      return () => {
        if (tiltRef.current) {
          (tiltRef.current as any).vanillaTilt.destroy();
        }
      };
    }
  }, []);

  return (
    <img
      ref={tiltRef}
      src={imageUrl}
      alt="Gallery"
      className={className}
    />
  );
};

export default TiltImage;
