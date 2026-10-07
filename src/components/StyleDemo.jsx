import Radium from "radium";
function StyleDemo(){
    const headingstyle ={
        color: 'blue',
        backgroundColor: "lightpink",
        padding:"10px"
    }
    const styles={
        heading:{
            color:"blue",
            backgrounfColor:"lightgray",
            padding:"20px"
        },
        button:{
            backgrounfColor:"maroon",
            color:"white",
            padding:"10px 20px",
            cursor:"pointer",
        ".hover":{
                backgroundColor:"brown"
            },

        },

    };
    return(
        <div>
            <h2 style={headingstyle}>Student Profile</h2>
             <h3 style={headingstyle}>Freeeeeeee</h3>
             <h4 styles={styles.heading}>Pseudo Classes styling</h4>
             <button style={styles.button}>Save Profile</button>
        </div>
    );
}

export default Radium(StyleDemo);