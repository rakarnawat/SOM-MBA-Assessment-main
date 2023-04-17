import React, {useState} from "react";
import "./Reports.css";

import { useNavigate } from "react-router-dom";


import juicy_business from "../images/juicy-business-coach-explains-the-material-to-the-woman.gif";


function Reports() {

    let navigate = useNavigate();

    const [Dashactive, setDashActive] = useState(true);
    const [PBactive, setPBActive] = useState(false);
    const [CAactive, setCAActive] = useState(false);
    const [DDactive, setDDActive] = useState(false);
    const [BIactive, setBIActive] = useState(false);
    const [SRactive, setSRActive] = useState(false);
    const [DashShow,setDashShow] = useState(true)
    const [PBShow,setPBShow] = useState(false)
    const [CAShow,setCAShow] = useState(false)
    const [DDShow,setDDShow] = useState(false)
    const [BIShow,setBIShow] = useState(false)
    const [SRShow,setSRShow] = useState(false)
    
    const ShowDash =()=>{
        if(DashShow === true){setDashShow(true)}
        else{setDashShow(true); setPBShow(false); setCAShow(false); setDDShow(false); setBIShow(false); setSRShow(false);}
        setDashActive(true); setPBActive(false); setCAActive(false); setDDActive(false); setBIActive(false); setSRActive(false);
    } 
    
    const ShowPB =()=>{
        if(PBShow === true){setPBShow(true)}
        else{setPBShow(true); setCAShow(false); setDDShow(false); setBIShow(false); setSRShow(false); setDashShow(false);}
        setDashActive(false); setPBActive(true); setCAActive(false); setDDActive(false); setBIActive(false); setSRActive(false);
    }
    
    const ShowCA =()=>{
        if(CAShow === true){setCAShow(true)}
        else{setCAShow(true); setPBShow(false); setDDShow(false); setBIShow(false); setSRShow(false); setDashShow(false);}
        setDashActive(false); setPBActive(false); setCAActive(true); setDDActive(false); setBIActive(false); setSRActive(false);
    }
    
    const ShowDD =()=>{
        if(DDShow === true){setDDShow(true)}
        else{setDDShow(true); setPBShow(false); setCAShow(false); setBIShow(false); setSRShow(false); setDashShow(false);}
        setDashActive(false); setPBActive(false); setCAActive(false); setDDActive(true); setBIActive(false); setSRActive(false);
    }
    
    const ShowBI =()=>{
        if(BIShow === true){setBIShow(true)}
        else{setBIShow(true); setPBShow(false); setCAShow(false); setDDShow(false); setSRShow(false); setDashShow(false);}
        setDashActive(false); setPBActive(false); setCAActive(false); setDDActive(false); setBIActive(true); setSRActive(false);
    }
    
    const ShowSR =()=>{
        if(SRShow === true){setSRShow(true)}
        else{setSRShow(true); setPBShow(false); setCAShow(false); setBIShow(false); setDDShow(false); setDashShow(false);}
        setDashActive(false); setPBActive(false); setCAActive(false); setDDActive(false); setBIActive(false); setSRActive(true);
    }

    const logoutRoute = () =>{ 
        let path = `/`; 
        navigate(path);
    }
    const reportsBtnClick = () =>{ 
        let path = `/BIReports`; 
        navigate(path);
    }
    
    return(
        <div className="ReportsMainContainer">
            <div className="LeftSection">
                <div className="AdminPanelTitle">
                    <h4 className="AdminPanelTitleText">ADMIN PANEL</h4>
                </div>
                <div className="UserNameTitle">
                    <h2 className="UserNameTitleText">User Name</h2>
                </div>
                <button id="btnClick" onClick={ShowDash} className="BtnContainer">
                    <h2 className="TitleText" style={{ color: Dashactive ? "#30FFC7" : "#f8f8f8" }} >Dashboard</h2>
                </button>
                <button id="btnClick" onClick={ShowPB} className="BtnContainer">
                    <h2  className="TitleText" style={{ color: PBactive ? "#30FFC7" : "#f8f8f8" }}>Personal Beliefs</h2>
                </button>
                <button id="btnClick" onClick={ShowCA} className="BtnContainer">
                    <h2 className="TitleText" style={{ color: CAactive ? "#30FFC7" : "#f8f8f8" }}>Critical Analysis</h2>
                </button>
                <button id="btnClick" onClick={ShowDD} className="BtnContainer">
                    <h2 className="TitleText" style={{ color: DDactive ? "#30FFC7" : "#f8f8f8" }}>Difficult Decisions</h2>
                </button>
                <button id="btnClick" onClick={ShowBI} className="BtnContainer">
                    <h2 className="TitleText" style={{ color: BIactive ? "#30FFC7" : "#f8f8f8" }}>Behavioral Interview</h2>
                </button>
                <button id="btnClick" onClick={ShowSR} className="BtnContainer">
                    <h2 className="TitleText" style={{ color: SRactive ? "#30FFC7" : "#f8f8f8" }}>Student Records</h2>
                </button>
                <button onClick={logoutRoute} className='LogoutBtn' >Logout</button>
            </div>
            {/* <div className="DashtSection">
               
            </div> */}
            <div >
                {
                    DashShow && (
                        <div>
                        <div className="DashtSection">
                            <h1>Dashboard</h1>
                        </div>
                        <div className="Dasht1Section">
                            <h1>search here</h1>
                        </div>
                        </div>
                        
                    )
                }
                {
                    PBShow && (
                        <div>
                            <div className="PBserach">
                                <h1>Search Students</h1>
                            </div>
                            <div className="PBRightSection">
                                {/**Graphs can be added here */}
                                <h1>Personal Belief Student Grpahs</h1>
                            </div> 
                            <div className="PBRightRecords">
                                {/**Graphs can be added here */}
                                <h1>Student details in text</h1>
                            </div> 
                        </div>
                    )
                }
                {
                    CAShow && (
                        <div>
                            <div className="PBserach">
                                <h1>Search Students</h1>
                            </div>
                            <div className="PBRightSection">
                                {/**Graphs can be added here */}
                                <h1>Critical Analysis Student Grpahs</h1>
                            </div> 
                            <div className="PBRightRecords">
                                {/**Graphs can be added here */}
                                <h1>Student details in text</h1>
                            </div> 
                        </div>
                    )
                }
                {
                    DDShow && (
                        <div>
                            <div className="PBserach">
                                <h1>Search Students</h1>
                            </div>
                            <div className="PBRightSection">
                                {/**Graphs can be added here */}
                                <h1>Difficult Decisions Student Grpahs</h1>
                            </div> 
                            <div className="PBRightRecords">
                                {/**Graphs can be added here */}
                                <h1>Student details in text</h1>
                            </div> 
                        </div>
                    )
                }
                {
                    BIShow && (
                        <div className="BIMain">
                            <div>
                                <button className="BIReports" onClick={reportsBtnClick}>Behavioral Interview Reports</button>
                            </div>
                        <div className="BISection">
                            <div className="s1card">
                                <img src={juicy_business} alt="Avatar" className="s1Image" />
                                <div className="s1Selection">
                                    <h1 className="s1Title">Simulation 1</h1>
                                    
                                    <form id="form" className="s1StartBtnForm" action="/simulation1">
                                        <div className="s1StartButton">
                                            <input className="s1StartText" type="submit"  value=">"></input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="s1card">
                                <img src={juicy_business} alt="Avatar" className="s1Image" />
                                <div className="s1Selection">
                                    <h1 className="s1Title">Simulation 2</h1>
                                    
                                    <form id="form" className="s1StartBtnForm" action="/simulation1">
                                        <div className="s1StartButton">
                                            <input className="s1StartText" type="submit" value=">"></input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="s1card">
                                <img src={juicy_business} alt="Avatar" className="s1Image" />
                                <div className="s1Selection">
                                    <h1 className="s1Title">Evaluation 1</h1>
                                    
                                    <form id="form" className="s1StartBtnForm" action="/simulation1">
                                        <div className="s1StartButton">
                                            <input className="s1StartText" type="submit" value=">"></input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="s1card">
                                <img src={juicy_business} alt="Avatar" className="s1Image" />
                                <div className="s1Selection">
                                    <h1 className="s1Title">Evaluation 2</h1>
                                    
                                    <form id="form" className="s1StartBtnForm" action="/simulation1">
                                        <div className="s1StartButton">
                                            <input className="s1StartText" type="submit" value=">"></input>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                         
                    )
                }
                {
                    SRShow && (
                        <div>
                        <div className="Dasht1Section">
                            <h1>search student here</h1>
                        </div>
                        <div className="DashtSection">
                            <h1>Student Records</h1>
                        </div>
                        </div>
                    )
                }
                
            </div>
        </div>
    );
}

export default Reports;