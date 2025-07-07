interface NoOptImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  unoptimized?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  onError?: () => void;
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
  ...props
}: NoOptImageProps) {
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full ${className}`}
        style={style}
        onClick={onClick}
        onError={onError}
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
      onError={onError}
    />
  );
}