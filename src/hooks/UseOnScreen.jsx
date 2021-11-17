import { useEffect, useState } from "react";

export default (ref) => {
  const [isVisible, setVisibility] = useState(false);
  const options = {
    threshold: 0.5,
  };
  const observer = new IntersectionObserver(
    ([entry]) => setVisibility(entry.isIntersecting),
    options
  );
  useEffect(() => {
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  return isVisible;
};
