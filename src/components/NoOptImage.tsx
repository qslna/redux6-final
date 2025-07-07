import React, { useState } from 'react';

// Pure HTML img wrapper - NO Next.js dependencies whatsoever
interface NoOptImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
  // These props are completely ignored
  sizes?: string;
  unoptimized?: boolean;
  priority?: boolean;
  placeholder?: string;
  blurDataURL?: string;
  quality?: number;
  [key: string]: any;
}

export default function NoOptImage({
  src,
  alt,
  className = '',
  fill,
  width,
  height,
  style,
  onClick,
  onError,
  loading = 'lazy',
  // All Next.js optimization props are ignored
  sizes,
  unoptimized,
  priority,
  placeholder,
  blurDataURL,
  quality,
  ...props
}: NoOptImageProps) {
  const [hasError, setHasError] = useState(false);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    if (onError) {
      onError();
    }
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-100 flex items-center justify-center text-gray-400 text-xs ${fill ? 'absolute inset-0 w-full h-full' : ''} ${className}`}
        style={style}
        onClick={onClick}
      >
        Image Error
      </div>
    );
  }

  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover ${className}`}
        style={style}
        onClick={onClick}
        onError={handleError}
        loading={loading}
        {...props}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      onClick={onClick}
      onError={handleError}
      loading={loading}
      {...props}
    />
  );
}