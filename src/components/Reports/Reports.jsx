import React, {useState} from "react";
import "./Reports.css";

import { useNavigate } from "react-router-dom";

function Reports() {
    let navigate = useNavigate(); 
    const [DashShow,setDashShow] = useState(true)
    const ShowDash =()=>{
        if(DashShow === true){setDashShow(true)}
        else{setDashShow(true); setPBShow(false); setCAShow(false); setDDShow(false); setBIShow(false); setSRShow(false);}
    }
    const [PBShow,setPBShow] = useState(false)
    const ShowPB =()=>{
        if(PBShow === true){setPBShow(true)}
        else{setPBShow(true); setCAShow(false); setDDShow(false); setBIShow(false); setSRShow(false); setDashShow(false);}
    }
    const [CAShow,setCAShow] = useState(false)
    const ShowCA =()=>{
        if(CAShow === true){setCAShow(true)}
        else{setCAShow(true); setPBShow(false); setDDShow(false); setBIShow(false); setSRShow(false); setDashShow(false);}
    }
    const [DDShow,setDDShow] = useState(false)
    const ShowDD =()=>{
        if(DDShow === true){setDDShow(true)}
        else{setDDShow(true); setPBShow(false); setCAShow(false); setBIShow(false); setSRShow(false); setDashShow(false);}
    }
    const [BIShow,setBIShow] = useState(false)
    const ShowBI =()=>{
        if(BIShow === true){setBIShow(true)}
        else{setBIShow(true); setPBShow(false); setCAShow(false); setDDShow(false); setSRShow(false); setDashShow(false);}
    }
    const [SRShow,setSRShow] = useState(false)
    const ShowSR =()=>{
        if(SRShow === true){setSRShow(true)}
        else{setSRShow(true); setPBShow(false); setCAShow(false); setBIShow(false); setDDShow(false); setDashShow(false);}
    }
    const logoutRoute = () =>{ 
        let path = `/`; 
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
                    <h2  id="txtClick" className="TitleText">Dashboard</h2>
                </button>
                <button id="btnClick" onClick={ShowPB} className="BtnContainer">
                    <h2  id="txtClick" className="TitleText">Personal Beliefs</h2>
                </button>
                <button id="btnClick" onClick={ShowCA} className="BtnContainer">
                    <h2 className="TitleText">Critical Analysis</h2>
                </button>
                <button id="btnClick" onClick={ShowDD} className="BtnContainer">
                    <h2 className="TitleText">Difficult Decisions</h2>
                </button>
                <button id="btnClick" onClick={ShowBI} className="BtnContainer">
                    <h2 className="TitleText">Behavioral Interview</h2>
                </button>
                <button id="btnClick" onClick={ShowSR} className="BtnContainer">
                    <h2 className="TitleText">Student Records</h2>
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
                        <div className="RightSection">
                            {/**Graphs can be added here */}
                            <h1>PB Clicked</h1>
                        </div> 
                    )
                }
                {
                    CAShow && (
                        <div className="RightSection">
                            <h1>CA Clicked</h1>
                        </div> 
                    )
                }
                {
                    DDShow && (
                        <div className="RightSection">
                            <h1>DD Clicked</h1>
                        </div> 
                    )
                }
                {
                    BIShow && (
                        <div className="RightSection">
                            <h1>BI Clicked</h1>
                        </div> 
                    )
                }
                {
                    SRShow && (
                        <div className="RightSection">
                            <h1>SR Clicked</h1>
                        </div> 
                    )
                }
                
            </div>
        </div>
    );
}

export default Reports;