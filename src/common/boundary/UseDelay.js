import React, {useState, useEffect} from 'react'

function UseDelayedRender(delay) {
  const [delayed, setDelayed] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), delay);
    return () => clearTimeout(timeout);
  }, [delay]);
  return (
    <div>
      {fn => !delayed && fn()}
    </div>
  )
}

export default UseDelayedRender;
