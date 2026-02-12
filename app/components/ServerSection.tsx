import { ReactNode } from 'react';
import PetDecoration from './PetDecoration';

interface ServerSectionProps {
  children?: ReactNode;
  className?: string;
  showPet?: boolean;
  petType?: 'cat' | 'guinea-pig';
  petPosition?: 'left' | 'right' | 'center';
  id?: string;
}

export default function ServerSection({
  children,
  className = '',
  showPet = false,
  petType = 'cat',
  petPosition = 'center',
  id
}: ServerSectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${className}`}
    >
      {showPet && (
        <PetDecoration 
          type={petType} 
          position={petPosition}
          className="mb-8"
        />
      )}
      {children}
    </section>
  );
}