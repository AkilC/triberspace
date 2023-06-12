import React, { useEffect, useMemo } from "react";
import { Route, Routes, useLocation, Outlet } from "react-router-dom";
import TestScene from "./TestScene";
import Scene1 from "./Scene1";
import { WorldContext } from '../tspace_components/contexts/WorldContext';

const ScenesHandler = ({ characterRef }) => {
  const location = useLocation();
  const { isWorldInitialized, initializeWorld } = React.useContext(WorldContext);

  useEffect(() => {
    if (!isWorldInitialized) {
      initializeWorld();
    }
  }, [isWorldInitialized, initializeWorld]);

  return (
    <>
      {isWorldInitialized && (
        <Routes>
          <Route
            key="Scene1"
            path="/"
            element={<Scene1 characterRef={characterRef} />}
          />
          <Route
            key="testScene"
            path="/testScene"
            element={<TestScene characterRef={characterRef} />}
          />
        </Routes>
      )}
    </>
  );
};

export default ScenesHandler;
