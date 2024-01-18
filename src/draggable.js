import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';
import Title from 'antd/es/typography/Title';
import { Card } from 'antd';
import GLBViewer from './glbviewer';
import { TransparentCardView } from './card';

export const glassStyle ={
  "background": "rgba(255, 255, 255, 0.2)",
  "borderRadius": "40px 40px 40px 40px",
  "boxShadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
  "backdropFilter": "blur(5.9px)",
  "WebkitBackdropFilter": "blur(5.9px)",
  "border": "1px solid rgba(255, 255, 255, 0.43)",
  margin:'30px',
  color:'white'
};

export const DraggableCardView = ({ initialY, snapPoints, cardStyle, title, content }) => {
  // Define the spring animation for the vertical position
  const [{ y }, set] = useSpring(() => ({ y: initialY }));

  // Bind the drag gesture
  const bind = useDrag(({ down, movement: [, my] }) => {
    const newY = down ? my + y.get() : y.get();
    const snapTo = snapPoints.reduce((prev, curr) => 
      Math.abs(curr - newY) < Math.abs(prev - newY) ? curr : prev
    );
    
    set({
      y: down ? newY : snapTo, // Follow the finger when down, snap to position when released
    });
  }, { axis: 'y' });

  return (
    <animated.div {...bind()} style={{ y, ...cardStyle }}>

       <Title level={4}style={{position: 'absolute', top: '-15px', color:'white'}}>{title}</Title>
       <div style={{margin:'10px', marginTop: '120px', borderRadius:"60px",backgroundColor: 'rgba(0,0,0,0.2)',touchAction: 'auto', height:'100%', width:'100%'}}>
        {content}
      
       </div>
    </animated.div>
  );
};
export const HistoryCard = () => {
  const viewCardStyle = {
      
      width: '100%',
      height: '100vh',
    "background": "rgba(255, 255, 255, 0.2)",
  "borderRadius": "16px",
  "boxShadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
  "backdropFilter": "blur(10px)",
  "WebkitBackdropFilter": "blur(10px)",
  "border": "1px solid rgba(255, 255, 255, 0.3)",
    borderRadius: '60px 60px 0px 0px',
    color:'#000000',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    touchAction: 'none',
    position: 'absolute',
  };

  return (
    <DraggableCardView
      initialY={window.innerHeight - 200} // Start 1/6th from the top
      snapPoints={[window.innerHeight / 4 - 75,  window.innerHeight - 200]}
      cardStyle={viewCardStyle}
      title={'History'}
      content={<TransparentCardView content={"this is history"}/>}
    />
  );
};
export const ViewCard = () => {
  const viewCardStyle = {
    width: '100%',
    height: '100vh',
    "background": "rgba(255, 255, 255, 0.2)",
  "borderRadius": "16px 16px 0px 0px",
  "boxShadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
  "backdropFilter": "blur(10px)",
  "WebkitBackdropFilter": "blur(10px)",
  "border": "1px solid rgba(255, 255, 255, 0.43)",
    borderRadius: '60px 60px 0px 0px',
    color:'#000000',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    touchAction: 'none',
    position: 'absolute',
  };

  return (
    <DraggableCardView
      initialY={window.innerHeight - 150} // Start 1/6th from the top
      snapPoints={[window.innerHeight / 4 - 75,  window.innerHeight - 150]}
      cardStyle={viewCardStyle}
      title={'Images'}
      content={<>
        
      </>
        }
    />
  );
};


export const InfoCard = () => {
  const infoCardStyle = {
    width: '100%',
    height: '100vh',
    "background": "rgba(255, 255, 255, 0.2)",
  "borderRadius": "16px 16px 0px 0px",
  "boxShadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
  "backdropFilter": "blur(10px)",
  "WebkitBackdropFilter": "blur(10px)",
  "border": "1px solid rgba(255, 255, 255, 0.43)",
    borderRadius: '60px 60px 0px 0px',
    position: 'absolute',
    color:'#000000',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    touchAction: 'none',
  };

  return (
    <DraggableCardView
      initialY={window.innerHeight - 100} // Start at the middle of the screen
      snapPoints={[window.innerHeight / 4 - 75, window.innerHeight - 100]}
      cardStyle={infoCardStyle}
      title={'Info'}
      content={
            <>
        <TransparentCardView content={'Info'}/>
      <TransparentCardView content={'hello'}/>
        </>}
    />
  );
};

