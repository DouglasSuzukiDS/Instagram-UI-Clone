export default function Alert(props) {
   return(
      <>
      <div className="alertMsg mt-3 flex column"> 
         <h4 className="mb-1">{ props.msgAlert }</h4>
         <h3>{'< DougSZK />'}</h3>
      </div>
      </>
   )
}