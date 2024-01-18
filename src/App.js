import logo from './logo.svg';
import './App.css';
import {HistoryCard, InfoCard, ViewCard } from './draggable';
import { Button, Col, Row, message } from 'antd';
import { AppstoreOutlined, ShareAltOutlined} from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import GLBViewer from './glbviewer';

function App() {

  return (<>
  <Row style={{position: 'relative', top:'40px'}}>
    <Col span={12}>
    <Button onClick={()=> message.success("share")}  style={{width:'30%', marginLeft:'20%', height:'60px', 
  "background": "rgba(255, 255, 255, 0.2)",
  "borderRadius": "16px",
  "boxShadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
  "backdropFilter": "blur(5.9px)",
  "WebkitBackdropFilter": "blur(5.9px)",
  "border": "1px solid rgba(255, 255, 255, 0.43)",}} icon={<AppstoreOutlined style={{fontSize:"45px", color:'white'}}/>}/>
    </Col>
    <Col span={12}>
    <Button onClick={()=> message.success("share")} style={{width:'30%', marginLeft:'50%',height:'60px',
  "background": "rgba(255, 255, 255, 0.2)",
  "borderRadius": "16px",
  "boxShadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
  "backdropFilter": "blur(5.9px)",
  "WebkitBackdropFilter": "blur(5.9px)",
  "border": "1px solid rgba(255, 255, 255, 0.43)",}} icon={<ShareAltOutlined style={{fontSize:"45px", color:'white'}}/>}/>
    </Col>
    <Col span={24}><Title style={{position: 'relative', top:'-30px', textAlign: 'center', color: 'white'}}>Obsidian</Title></Col>
    </Row>
    <div style={{ background: 'rgb(0,212,255)', background: 'radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 12%, rgba(2,0,36,1) 77%)', overflow: 'hidden'}}>
      
      <GLBViewer glbPath={'/gemstones/scene_(30).glb'}/>
      <HistoryCard/>
      <ViewCard/>
   <InfoCard/>
    </div>
  </>
  );
}

export default App;
