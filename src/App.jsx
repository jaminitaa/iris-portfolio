import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Suspense, useEffect, useState } from "react";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { LoadingScreen } from "./components/LoadingScreen";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { useSpring } from '@react-spring/core'

function App() {
  const [section, setSection] = useState(0);
  const [started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [activePortal, setActivePortal] = useState(null);
  const [{ background, fill }, set] = useSpring({ background: '#f0f0f0', fill: '#202020' }, [])

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      {!started && <LoadingScreen started={started} setStarted={setStarted} />}
      {started && (
        <>
          <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
            <color attach="background" args={["#ffffff"]} />
            <ScrollControls pages={2} damping={0.1}>
              <ScrollManager section={section} onSectionChange={setSection} />
              <Scroll>
                <Suspense fallback={null}>
                  <Experience 
                    section={section} 
                    menuOpened={menuOpened} 
                    activePortal={activePortal}
                    setActivePortal={setActivePortal}
                  />
                </Suspense>
              </Scroll>
              <Scroll html>
                <Interface 
                  setSection={setSection} 
                  activePortal={activePortal}
                />
              </Scroll>
            </ScrollControls>
          </Canvas>
          <Menu
            onSectionChange={setSection}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
          />
        </>
      )}
      <Leva hidden />
    </>
  );
}

export default App;
