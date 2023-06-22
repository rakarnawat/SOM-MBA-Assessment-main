import React, {useState , useRef} from "react";
import "./SidePanel.css";

import { useNavigate } from "react-router-dom";

import searchLogo from "../images/search-icon.svg";



function SidePanel() {

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
    const [BIStudentFormShow,setBIStudentFormShow] = useState(true)
    const [SRShow,setSRShow] = useState(false)
    
    const ShowDash =()=>{
        if(DashShow === true){setDashShow(true)}
        else{setBIStudentFormShow(true); setDashShow(true); setPBShow(false); setCAShow(false); setDDShow(false); setBIShow(false); setSRShow(false);}
        setDashActive(true); setPBActive(false); setCAActive(false); setDDActive(false); setBIActive(false); setSRActive(false);
    } 
    
    const ShowPB =()=>{
        if(PBShow === true){setPBShow(true)}
        else{setBIStudentFormShow(true); setPBShow(true); setCAShow(false); setDDShow(false); setBIShow(false); setSRShow(false); setDashShow(false);}
        setDashActive(false); setPBActive(true); setCAActive(false); setDDActive(false); setBIActive(false); setSRActive(false);
    }
    
    const ShowCA =()=>{
        if(CAShow === true){setCAShow(true)}
        else{setBIStudentFormShow(true); setCAShow(true); setPBShow(false); setDDShow(false); setBIShow(false); setSRShow(false); setDashShow(false);}
        setDashActive(false); setPBActive(false); setCAActive(true); setDDActive(false); setBIActive(false); setSRActive(false);
    }
    
    const ShowDD =()=>{
        if(DDShow === true){setDDShow(true)}
        else{setBIStudentFormShow(true); setDDShow(true); setPBShow(false); setCAShow(false); setBIShow(false); setSRShow(false); setDashShow(false);}
        setDashActive(false); setPBActive(false); setCAActive(false); setDDActive(true); setBIActive(false); setSRActive(false);
    }
    
    const ShowBI =()=>{
        if(BIShow === true){setBIShow(true); setBIStudentFormShow(true);}
        else{setBIShow(true); setPBShow(false); setCAShow(false); setDDShow(false); setSRShow(false); setDashShow(false);}
        setDashActive(false); setPBActive(false); setCAActive(false); setDDActive(false); setBIActive(true); setSRActive(false);
    }
    
    const handleBIStudentInfoSumbit = () =>{
        if(BIShow === true){setBIShow(true); setBIStudentFormShow(false);}
        else{setBIStudentFormShow(false); setBIShow(true); setPBShow(false); setCAShow(false); setDDShow(false); setSRShow(false); setDashShow(false);}
        setDashActive(false); setPBActive(false); setCAActive(false); setDDActive(false); setBIActive(true); setSRActive(false);
    }

    const ShowSR =()=>{
        if(SRShow === true){setSRShow(true)}
        else{setBIStudentFormShow(true); setSRShow(true); setPBShow(false); setCAShow(false); setBIShow(false); setDDShow(false); setDashShow(false);}
        setDashActive(false); setPBActive(false); setCAActive(false); setDDActive(false); setBIActive(false); setSRActive(true);
    }

    const logoutRoute = () =>{ 
        let path = `/`; 
        navigate(path);
    }
    
    const inputRef = useRef(null);
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
            <div>
                {
                    DashShow && (
                        <div>
                        <div className="DashtSection">
                            <h1>Dashboard</h1>
                        </div>
                        <form action="/DashReports">
                            <div className="DashSearchBar">
                                <div className="BIReports1">
                                    <input
                                    ref={inputRef}
                                    required
                                    pattern="[b,B]{1}[0-9]{8}"
                                    type="text"
                                    placeholder="Please enter Student's B-Number"
                                    />
                                </div>
                                <div className="BIReports">
                                <img src={searchLogo} alt="Avatar" className="searchImage" />
                                <button className="BIReports2" >Search Student Reports</button>
                                </div>
                            </div>
                            </form>
                        </div>
                        
                    )
                }
                {
                    PBShow && (
                        <div>
                            <form action="/DashReports">
                            <div className="DashSearchBar">
                                <div className="BIReports1">
                                    <input
                                    ref={inputRef}
                                    required
                                    pattern="[b,B]{1}[0-9]{8}"
                                    type="text"
                                    placeholder="Please enter Student's B-Number"
                                    />
                                </div>
                                <div className="BIReports">
                                <img src={searchLogo} alt="Avatar" className="searchImage" />
                                <button className="BIReports2" >Search Student Reports</button>
                                </div>
                            </div>
                            </form>
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
                            <form action="/DashReports">
                            <div className="DashSearchBar">
                                <div className="BIReports1">
                                    <input
                                    ref={inputRef}
                                    required
                                    pattern="[b,B]{1}[0-9]{8}"
                                    type="text"
                                    placeholder="Please enter Student's B-Number"
                                    />
                                </div>
                                <div className="BIReports">
                                <img src={searchLogo} alt="Avatar" className="searchImage" />
                                <button className="BIReports2" >Search Student Reports</button>
                                </div>
                            </div>
                            </form>
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
                            <form action="/DashReports">
                            <div className="DashSearchBar">
                                <div className="BIReports1">
                                    <input
                                    ref={inputRef}
                                    required
                                    pattern="[b,B]{1}[0-9]{8}"
                                    type="text"
                                    placeholder="Please enter Student's B-Number"
                                    />
                                </div>
                                <div className="BIReports">
                                <img src={searchLogo} alt="Avatar" className="searchImage" />
                                <button className="BIReports2" >Search Student Reports</button>
                                </div>
                            </div>
                            </form>
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
                            <form action="/BIReports">
                            <div className="BISearchBar">
                                <div className="BIReports1">
                                    <input
                                    ref={inputRef}
                                    required
                                    pattern="[b,B]{1}[0-9]{8}"
                                    type="text"
                                    placeholder="Please enter Student's B-Number"
                                    />
                                </div>
                                <div className="BIReports">
                                <img src={searchLogo} alt="Avatar" className="searchImage" />
                                <button className="BIReports2" >Behavioral Interview Reports</button>
                                </div>
                            </div>
                            </form>
                       { BIStudentFormShow ? (
                        <div className="BIStudentInfoMainFrame">
                            <div className="BIStudentsInfoTitle">Enter Students Details</div>
                        <form className="BIStudentinfoForm" onsubmit="return false">   
                            <div className="BINameDiv">
                                <label className="BIFNameLabel" for="fname">First name:</label>
                                <input className="BIFNameInput" type="text" id="fname" placeholder="ABC"/>
                            </div>
                            <div className="BINameDiv">
                                <label className="BILNameLabel" for="lname">Last name:</label>
                                <input className="BILNameInput" type="text" id="lname" placeholder="XYZ"/>
                            </div>
                            <div className="BINameDiv">
                                <label className="BIBNumberLabel" for="bNumber">B-Number:</label>
                                <input className="BIBNumberInput" type="text" id="bNumber" required pattern="[b,B]{1}[0-9]{8}" placeholder="B-00000000"/>
                            </div>
                            <button className="BISubmitBtn" type="submit" onClick={handleBIStudentInfoSumbit} value="Submit">Submit</button>
                        </form>
                        </div>
                       ):(   
                        <div className="BISection">
                            <form id="form" className="s1StartBtnForm" action="/Simulation1">
                                <button className="s1card">
                                {/* <img src={juicy_business} alt="Avatar" className="s1Image" /> */}
                                    <div className="s1Selection">
                                        <h1 className="s1Title">Simulation 1</h1>
                                    
                                        {/* <div className="s1StartButton">
                                            <input className="s1StartText" type="submit"  value=">"></input>
                                        </div> */}
                                    </div>
                                </button>
                            </form>
                            <form id="form" className="s1StartBtnForm" action="/Simulation2">
                            <button className="s2card">
                                {/* <img src={juicy_business} alt="Avatar" className="s1Image" /> */}
                                <div className="s1Selection">
                                    <h1 className="s1Title">Simulation 2</h1>
                                    
                                        {/* <div className="s1StartButton">
                                            <input className="s1StartText" type="submit" value=">"></input>
                                        </div> */}
                                </div>
                            </button>
                            </form>
                            <form id="form" className="s1StartBtnForm" action="/Evaluation1">
                            <button className="e1card">
                                {/* <img src={juicy_business} alt="Avatar" className="s1Image" /> */}
                                <div className="s1Selection">
                                    <h1 className="s1Title">Evaluation 1</h1>
                                    
                                    
                                        {/* <div className="s1StartButton">
                                            <input className="s1StartText" type="submit" value=">"></input>
                                        </div> */}
                                </div>
                            </button>
                            </form>
                            <form id="form" className="s1StartBtnForm" action="/Evaluation2">
                                <button className="e2card">
                                    {/* <img src={juicy_business} alt="Avatar" className="s1Image" /> */}
                                    <div className="s1Selection">
                                        <h1 className="s1Title">Evaluation 2</h1>
                                        
                                            {/* <div className="s1StartButton">
                                                <input className="s1StartText" type="submit" value=">"></input>
                                            </div> */}
                                    </div>
                                </button>
                            </form>
                        </div>
                        )}
                    </div>
                        
                         
                    )
                }
                {
                    SRShow && (
                        <div>
                        <form action="/SRReports">
                            <div className="DashSearchBar">
                                <div className="BIReports1">
                                    <input
                                    ref={inputRef}
                                    required
                                    pattern="[b,B]{1}[0-9]{8}"
                                    type="text"
                                    placeholder="Please enter Student's B-Number"
                                    />
                                </div>
                                <div className="BIReports">
                                <img src={searchLogo} alt="Avatar" className="searchImage" />
                                <button className="BIReports2" >Search Student's Reports</button>
                                </div>
                            </div>
                            </form>
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

export default SidePanel;