import "../settings/settings.css";
const Settings = () => {
  return (
    <>
    
      <div className="settingDiv">
      <h1>Change Password</h1>
        <input type="text" placeholder="Old Password" />
        <input type="text" placeholder="New Password" />
        <input type="text" placeholder="Confirm Password" />
        <button style={{height:'40px',width:'300px'}}>Change</button>
      </div>
    </>
  );
};
export default Settings;
