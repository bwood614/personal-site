import { useState } from "react";

export default function useHover() {
  const [hovering, setHovering] = useState(false);

  const toggleHover = () => {
    setHovering(!hovering);
  };

  return { hovering, toggleHover };
}
