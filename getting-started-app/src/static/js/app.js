function App() {
    const [role, setRole] = React.useState(null); // state to track user role
  
    const handleRoleSelect = (selectedRole) => {
      setRole(selectedRole);
    };
  
    return (
      <div className="app-container">
        {!role && <RoleSelection onRoleSelect={handleRoleSelect} />}
        {role === 'customer' && <CustomerPage />}
        {role === 'driver' && <DriverPage />}
      </div>
    );
  }
  
  function RoleSelection({ onRoleSelect }) {
    return (
      <div>
        <h1>Welcome to Junk-EZ</h1>
        <button onClick={() => onRoleSelect('customer')}>I'm a Customer</button>
        <button onClick={() => onRoleSelect('driver')}>I'm a Driver</button>
      </div>
    );
  }
  
  function CustomerPage() {
    const [image, setImage] = React.useState(null);
    const [price, setPrice] = React.useState('');
  
    React.useEffect(() => {
      const video = document.createElement('video');
      video.id = 'video-background';
      video.setAttribute('playsinline', '');
      video.setAttribute('autoplay', '');
      video.setAttribute('muted', '');
      document.body.appendChild(video);
  
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
          video.srcObject = stream;
          video.play();
        })
        .catch(err => {
          console.log("An error occurred: " + err);
        });
  
      return () => {
        video.pause();
        if (video.srcObject) {
          video.srcObject.getTracks().forEach(track => track.stop());
        }
        video.remove();
      };
    }, []);
  
    const handleCapture = ({ target }) => {
      const fileReader = new FileReader();
      const file = target.files[0];
  
      fileReader.onloadend = () => {
        setImage(fileReader.result);
      };
  
      if (file) {
        fileReader.readAsDataURL(file);
      }
    };
  
    const handleSubmit = () => {
      console.log({ image, price });
      alert('Data submitted');
    };
  
    return (
      <div className="customer-page">
        <h1>Customer Page</h1>
        <input type="file" accept="image/*" capture="environment" onChange={handleCapture} />
        {image && <img src={image} alt="Waste item" />}
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter your price" />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }
  
  function DriverPage() {
    return (
      <div className="driver-page">
        <h1>Driver Page</h1>
        {/* Display list of pickup requests or other driver functionalities */}
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  