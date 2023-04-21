import logo from './logo.svg';
import './App.css';
import s from './style.module.css'
import { tvShowAPI } from './APIs/tvShowAPI';

function App() {

  return (
    <div className={s.container}>
      <div className={s.header}>
      <div className='row'>
              <div className='col-4'>
                <div>Logo</div>
                <div>Subtitle</div>
              </div>
              <div className='col-md-12 col-lg-4'>
                <input type='text' placeholder="seach" style={{width:"100%"}}></input>
              </div>
          </div>
      </div>
      <div className={s.show_details}> Show Details</div>
      <div className={s.recommendations}>Recommendations</div>
    </div>
  );
}

export default App;
