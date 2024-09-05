import { format, parseISO } from 'date-fns'; 
import "../profile/profile.css"
const Profile = () => {
  const userInfo = localStorage.getItem("info");
  const useDetails = JSON.parse(userInfo);
  const created =parseISO(useDetails.created_at);
  const createDate = format(created, 'MMMM dd, yyyy HH:mm:ss');
  const updated =parseISO(useDetails.created_at);
  const updatedDate = format(updated, 'MMMM dd, yyyy HH:mm:ss');
  
  return (
    <>
    <div style={{display:'flex',justifyContent:'center'}}>
      <form  className='profileform'>
        <div className="profileDiv">
          <img src={useDetails.image} alt="" style={{height:'50px',width:'150px',marginLeft:'170px'}}/>
        </div>
        <div className="profileDiv">
          <label id="Profilelabel" htmlFor="">Fullname</label>
          <input type="text" value={useDetails.fullname} />
        </div>

        <div className="profileDiv">
          <label id="Profilelabel" htmlFor="" style={{marginRight:'78px'}}>Email</label>
          <input type="text" value={useDetails.email} />
        </div>
        <div className="profileDiv">
          <label id="Profilelabel" htmlFor="" style={{marginRight:'73px'}}>Phone</label>
          <input type="text" value={useDetails.phone} />
        </div>
       
        <div className="profileDiv">
          <label id="Profilelabel" htmlFor="" style={{marginRight:'48px'}} >Password</label>
          <input type="text" value={useDetails.password} />
        </div>
        <div className="profileDiv">
          <label id="Profilelabel" htmlFor=""  style={{marginRight:'95px'}}>Info</label>
          <input type="text" value={useDetails.info} />
        </div>
       
        <div className="profileDiv">
          <label id="Profilelabel" htmlFor=""  style={{marginRight:'95px'}}>City</label>
          <input type="text" value={useDetails.city} />
        </div>
        <div className="profileDiv">
          <label id="Profilelabel" htmlFor=""   style={{marginRight:'45px'}}>Created At</label>
          <input type="text" value={createDate} />
        </div>
        <div className="profileDiv">
          <label id="Profilelabel" htmlFor="" style={{marginRight:'42px'}}>Updated At</label>
          <input type="text" value={updatedDate} />
        </div>
        <button id='btn'>Save</button>
      </form>
      </div>
    </>
  );
};
export default Profile;
