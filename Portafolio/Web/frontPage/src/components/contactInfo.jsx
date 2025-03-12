const MyInfo = () => {
    const email = "tavoaod@gmail.com"
    const tel = "3059230920"
    const GitHub = "gusworkout"
    return(
        <div className="contact">
            <div className="mypage1">
             <img src="src/assets/linkedin48.svg"/>
             <a href="">{email}</a>
            </div>
           <div className="mypage2"> 
            <img src="src/assets/github48black.svg"/>
            <a href="">{GitHub}</a> 
            </div>
        </div>
    )
}

export default MyInfo