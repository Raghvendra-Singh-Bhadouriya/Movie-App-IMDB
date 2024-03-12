import Topweb from "../Body/Allwebseries/Topweb"
import Popularwebseries from "../Body/Allwebseries/Popularwebseries"
import Aringtodayweb from "../Body/Allwebseries/Aringtodayweb"
import Ontheairweb from "../Body/Allwebseries/Ontheairweb"

export default function Webseriess(){
    return(
        <>
        <div style={{color:"red",
        fontFamily:" 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize:"150%",
        fontWeight:"bold",
        margin:"2%",
        }}>WebSeries</div>

        <Topweb/>
        <Popularwebseries/>
        <Aringtodayweb/>
        <Ontheairweb/>
        </>
    )
}