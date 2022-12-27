import React, { useState } from "react";
import './survey.css'

const Survey = () => {
  const [formData, setFormData] = useState({
        name : '',
        profession : '',
        Q3 : '',
        Q4 : '',
        Q5 : '',
        Q6 : [],
        Q7 : '',
        Q8 : [],
        Q9 : '',
        Q10 : '',
        Q11 : '',
        Q12 : '',
        Q13 : '',
        Q14 : '',
        Q15 : '',
        Q16 : ''
  });

  const onChangeHanlder = (e) =>{

      if(e.target.name === 'Q6'){
        let copy1 = {...formData}
        if(e.target.checked){
          copy1.Q6.push(e.target.value)
            
        }else{
          copy1.Q6 = copy1.Q6.filter(el=>el !== e.target.value)
        }

        setFormData(copy1)

      }else{
        setFormData(()=>({
          ...formData, 
          [e.target.name] : e.target.value
         }))
      }

      if(e.target.name === 'Q8'){
        let copy = {...formData}
        if(e.target.checked){
            copy.Q8.push(e.target.value)
        }else{
          copy.Q8 = copy.Q8.filter(el=>el !== e.target.value)
        }

        setFormData(copy)

      }else{
        setFormData(()=>({
          ...formData, 
          [e.target.name] : e.target.value
         }))
      }

       
  };

  return (
    <form className="quize shadow">
    <div className="question-bar">
        <h2 className="qestion">1. What is your name? (আপনার নাম কি ?)</h2>
            <div className="col-sm-10">
                <input type="text" className="form-control" name="name" placeholder="Name" onChange={onChangeHanlder} />
              </div>
      </div>
      <div className="question-bar mt-4">
        <h2 className="qestion">2. If you’re working, what's your profession? (যদি আপনি কাজ করে থাকে ন, আপনার পে শা কি ?)
        </h2>
            <div className="col-sm-10">
                <input type="text" className="form-control" name="profession" placeholder="Profession" onChange={onChangeHanlder} />
              </div>
      </div>
      <div className="question-bar mt-4">
        <h2 className="qestion">3. In which way would you like to learn English? (আপনি ঠিক ক োন পদ্ধতি তে ইংরে জি শি খতে
            চান?)</h2>
            <div className="form-floating">
                <textarea className="form-control" onChange={onChangeHanlder} name="Q3" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                <label htmlFor="floatingTextarea2">Answer</label>
              </div>
        
      </div>
    <div className="question-bar mt-4">
      <h2 className="qestion">4. Do you want to be fluent in English? (আপনি কি ইংরে জি তে আর ো ভাল ো হতে চান?)</h2>
      <ul>
        <li>
          <input type="radio" value="a. Yes (হ্যাঁ)" name="Q4" id="q4a" className="ansList" onChange={onChangeHanlder}/>
          <label htmlFor="q4a" className="ansa">a. Yes (হ্যাঁ)</label>
        </li>
       
        <li>
          <input type="radio" name="Q4" id="q4b" value="b. No (না)" className="ansList" onChange={onChangeHanlder}/>
          <label htmlFor="q4b" className="ansb">b. No (না)</label>
        </li>
  
      </ul>
      
    </div>
     <div className="question-bar">
        <h2 className="qestion">5. Are you confident while speaking English? (ইংরে জি তে কথা বলার সময় কি আপনি কনফিডেন্ট
            থাকে ?)</h2>
            <ul>
                <li>
                  <input type="radio" name="Q5" id="q5a" value='a. Yes (হ্যাঁ)' className="ansList" onChange={onChangeHanlder}/>
                  <label htmlFor="q5a" className="ansa">a. Yes (হ্যাঁ)</label>
                </li>
                <li>
                  <input type="radio" name="Q5" id="q5b" value='b. No (না)' className="ansList" onChange={onChangeHanlder}/>
                  <label htmlFor="q5b" className="ansb">b. No (না)</label>
                </li>
          
              </ul>
        
      </div>
      <div className="question-bar">
        <h2 className="qestion">6. Which part of English gives you the most problems? (ইংরেজির ক োন অংশটাতে আপনি বে শি
            দর্বুর্বল?)</h2>
        <ul>
          <li>
            <div className="form-check">
                <input className="form-check-input" value='a. Grammar (গ্রামার)' name="Q6" type="checkbox" id="q6a" onChange={onChangeHanlder}/>
                <label  htmlFor="q6a">
                a. Grammar (গ্রামার)

                </label>
              </div>
          </li>
          <li>
            <div className="form-check">
                <input className="form-check-input" name="Q6" type="checkbox" id="q6b" value="b. Writing (রাইটিং)" onChange={onChangeHanlder}/>
                <label  htmlFor="q6b">
                b. Writing (রাইটিং)
              </label>
              </div>
          </li>
          <li>
            <div className="form-check">
                <input className="form-check-input" name="Q6" type="checkbox" id="q6c" value="c. Speaking (স্পি কি ং)" onChange={onChangeHanlder}/>
                <label  htmlFor="q6c">
                c. Speaking (স্পি কি ং)

              </label>
              </div>
          </li>
          <li>
            <div className="form-check">
                <input className="form-check-input" name="Q6" type="checkbox" id="q6d" value="d. Grammar (গ্রামার)" onChange={onChangeHanlder}/>
                <label  htmlFor="q6d">
                d. Grammar (গ্রামার)

              </label>
              </div>
          </li>
        </ul>
        
      </div>
      <div className="question-bar">
        <h2 className="qestion">7. Do you face problems creating sentences in English? (ইংরে জি বাক্য গঠনে কি আপনার
            সমস্যা হয়?)</h2>
            <ul>
                <li>
                  <input type="radio" name="Q7" id="q7a" className="ansList" value='a. Yes (হ্যাঁ)' onChange={onChangeHanlder}/>
                  <label htmlFor="q7a" className="ansa">a. Yes (হ্যাঁ)</label>
                </li>
                <li>
                  <input type="radio" name="Q7" id="q7b" className="ansList" value='b. No (না)' onChange={onChangeHanlder}/>
                  <label htmlFor="q7b" className="ansb">b. No (না)</label>
                </li>
          
              </ul>
        
      </div>
      <div className="question-bar">
        <h2 className="qestion">8. By which course do you want to start your English Learning journey? (ক োন ক োর্সে র
            মাধ্যমে আপনি ইংরে জি শে খা শুরু করতে চান?)</h2>
        <ul>
        <li>
            <div className="form-check">
                <input className="form-check-input" name="Q8" type="checkbox" id="q8a" value="a. Reading (রি ডি ং)" onChange={onChangeHanlder}/>
                <label  htmlFor="q8a">
                a. Reading (রি ডি ং)


                </label>
              </div>
          </li>
          <li>
            <div className="form-check">
                <input className="form-check-input" name="Q8" type="checkbox" id="q8b" value="b. Writing (রাইটিং)" onChange={onChangeHanlder}/>
                <label  htmlFor="q8b">
                b. Writing (রাইটিং)

              </label>
              </div>
          </li>
          <li>
            <div className="form-check">
                <input className="form-check-input" name="Q8" type="checkbox" id="q8c" value="c. Listening (লি সে নি ং)" onChange={onChangeHanlder}/>
                <label  htmlFor="q8c">
                c. Listening (লি সে নি ং)

              </label>
              </div>
          </li>
          <li>
            <div className="form-check">
                <input className="form-check-input" name="Q8" type="checkbox" id="q8d" value="d. Speaking (স্পি কি ং)" onChange={onChangeHanlder}/>
                <label  htmlFor="q8d">
                d. Speaking (স্পি কি ং)

              </label>
              </div>
              
          </li>
          <li>
          <div className="form-check">
                <input className="form-check-input" name="Q8" type="checkbox" id="q8e" value="e. Grammar (গ্রামার)" onChange={onChangeHanlder}/>
                <label  htmlFor="q8e">
                e. Grammar (গ্রামার)

              </label>
              </div>
          </li>
        </ul>
        
      </div>
      <div className="question-bar">
        <h2 className="qestion">9. How much time do you want to give everyday to improve your English? (ইংরে জি চর্চায়
            আপনি প্রতদি ন কতটুকু সময় দি তে চান?</h2>
        <ul>
          <li>
            <input type="radio" name="Q9" id="q9a" className="ansList" value='a. 10 minutes (১০ মি নি ট)' onChange={onChangeHanlder}/>
            <label htmlFor="q9a" className="ansa">a. 10 minutes (১০ মি নি ট)</label>
          </li>
          <li>
            <input type="radio" name="Q9" id="q9b" className="ansList" value='b. Less than 30 minutes (৩০ মি নি টে র কম)' onChange={onChangeHanlder}/>
            <label htmlFor="q9b" className="ansb">b. Less than 30 minutes (৩০ মি নি টে র কম)</label>
          </li>
          <li>
            <input type="radio" name="Q9" id="q9c" className="ansList" value='c. More than 30 minutes (৩০ মি নি টে র বে শি )' onChange={onChangeHanlder}/>
            <label htmlFor="c" className="ansc">c. More than 30 minutes (৩০ মি নি টে র বে শি )</label>
          </li>
          <li>
            <input type="radio" name="Q9" id="q9d" className="ansList" value='d. More than 1 hour (১ ঘন্টার বে শি )' onChange={onChangeHanlder}/>
            <label htmlFor="q9d" className="ansd">d. More than 1 hour (১ ঘন্টার বে শি )</label>
          </li>
        </ul>
        
      </div>
      <div className="question-bar">
        <h2 className="qestion">10. How many minutes do you watch English videos(Movie, News, Youtube videos,
            Tiktok videos, podcasts etc.) daily? (আপনি প্রতি দি ন কতক্ষণ ইংরে জি ভি ডি ও দে খে ন?)</h2>
        <ul>
          <li>
            <input type="radio" name="Q10" id="q10a" className="ansList" value='a. Less than 30 minutes (৩০ মি নি টে র কম)' onChange={onChangeHanlder}/>
            <label htmlFor="q10a" className="ansa">a. Less than 30 minutes (৩০ মি নি টে র কম)</label>
          </li>
          <li>
            <input type="radio" name="Q10" id="q10b" className="ansList" value='b. 30 minutes (৩০ মি নি ট)' onChange={onChangeHanlder}/>
            <label htmlFor="q10b" className="ansb">b. 30 minutes (৩০ মি নি ট)</label>
          </li>
          <li>
            <input type="radio" name="Q10" id="q10c" className="ansList" value='c. More than 30 minutes (৩০ মি নি টে র বে শি )' onChange={onChangeHanlder}/>
            <label htmlFor="q10c" className="ansc">c. More than 30 minutes (৩০ মি নি টে র বে শি )</label>
          </li>
          <li>
            <input type="radio" name="Q10" id="q10d" className="ansList" value='d. More than 1 hour (১ ঘন্টার বে শি )' onChange={onChangeHanlder}/>
            <label htmlFor="q10d" className="ansd">d. More than 1 hour (১ ঘন্টার বে শি )</label>
          </li>
        </ul>
        
      </div>
      <div className="question-bar">
        <h2 className="qestion">11. How many minutes do you chat or speak in English(Messenger, Whatsapp, Telegram
            etc.) daily? (আপনি প্রতি দি ন কতক্ষন ইংরে জি তে চ্যাট অথবা ভয়ে স এ কথা বলে ন?)</h2>
        <ul>
          <li>
            <input type="radio" name="Q11" id="q11a" className="ansList" value='a. Less than 30 minutes (৩০ মি নি টে র কম)' onChange={onChangeHanlder}/>
            <label htmlFor="q11a" className="ansa">a. Less than 30 minutes (৩০ মি নি টে র কম)</label>
          </li>
          <li>
            <input type="radio" name="Q11" id="q11b" className="ansList" value='b. 30 minutes (৩০ মি নি ট)' onChange={onChangeHanlder}/>
            <label htmlFor="q11b" className="ansb">b. 30 minutes (৩০ মি নি ট)</label>
          </li>
          <li>
            <input type="radio" name="Q11" id="q11c" className="ansList" value='c. More than 30 minutes (৩০ মি নি টে র বে শি )' onChange={onChangeHanlder}/>
            <label htmlFor="q11c" className="ansc">c. More than 30 minutes (৩০ মি নি টে র বে শি )</label>
          </li>
          <li>
            <input type="radio" name="Q11" id="q11d" className="ansList" value='d. More than 1 hour (১ ঘন্টার বে শি )' onChange={onChangeHanlder}/>
            <label htmlFor="q11d" className="ansd">d. More than 1 hour (১ ঘন্টার বে শি )</label>
          </li>
        </ul>
        
      </div>
      <div className="question-bar">
        <h2 className="qestion">12. How many minutes do you read in English(Books, Newspaper, Online articles etc.)
            daily? (আপনি প্রতি দি ন কতক্ষন ইংরে জি পড়ে ন?)</h2>
        <ul>
          <li>
            <input type="radio" name="Q12" id="q12a" className="ansList" value='a. Less than 30 minutes (৩০ মি নি টে র কম)' onChange={onChangeHanlder}/>
            <label htmlFor="q12a" className="ansa">a. Less than 30 minutes (৩০ মি নি টে র কম)</label>
          </li>
          <li>
            <input type="radio" name="Q12" id="q12b" className="ansList" value='b. 30 minutes (৩০ মি নি ট)' onChange={onChangeHanlder}/>
            <label htmlFor="q12b" className="ansb">b. 30 minutes (৩০ মি নি ট)</label>
          </li>
          <li>
            <input type="radio" name="Q12" id="q12c" className="ansList" value='c. More than 30 minutes (৩০ মি নি টে র বে শি )' onChange={onChangeHanlder}/>
            <label htmlFor="q12c" className="ansc">c. More than 30 minutes (৩০ মি নি টে র বে শি )</label>
          </li>
          <li>
            <input type="radio" name="Q12" id="q12d" className="ansList" value='d. More than 1 hour (১ ঘন্টার বে শি )' onChange={onChangeHanlder}/>
            <label htmlFor="q12d" className="ansd">d. More than 1 hour (১ ঘন্টার বে শি )</label>
          </li>
        </ul>
        
      </div>
      <div className="question-bar">
        <h2 className="qestion">13. Will you sit for IELTS within 1 year? (আপনি কি এক বছরে র মধ্যে IELTS দি তে চান?)</h2>
        <ul>
          <li>
            <input type="radio" name="Q13" id="q13a" className="ansList" value='a. Yes (হ্যাঁ)' onChange={onChangeHanlder}/>
            <label htmlFor="q13a" className="ansa">a. Yes (হ্যাঁ)</label>
          </li>
          <li>
            <input type="radio" name="Q13" id="q13b" className="ansList" value='b. No (না)' onChange={onChangeHanlder}/>
            <label htmlFor="q13b" className="ansb">b. No (না)</label>
          </li>
        </ul>
        
      </div>
      
      <div className="question-bar">
        <h2 className="qestion">14. If you’re studying in university, In which year of University you are studying right now?
            (যদি আপনি ইউনি ভার্সি টিতে পরে থাকে ন, তবে আপনি ক োন বর্ষে র ছাত্র?)
            </h2>
        <ul>
          <li>
            <input type="radio" name="Q14" id="q14a" className="ansList" value='a. 1st Year (১ম বর্ষ)' onChange={onChangeHanlder}/>
            <label htmlFor="q14a" className="ansa">a. 1st Year (১ম বর্ষ)
            </label>
          </li>
          <li>
            <input type="radio" name="Q14" id="q14b" className="ansList" value='b. 2nd Year (২য় বর্ষ)' onChange={onChangeHanlder}/>
            <label htmlFor="q14b" className="ansb">b. 2nd Year (২য় বর্ষ)
                )</label>
          </li>
          <li>
            <input type="radio" name="Q14" id="q14c" className="ansList" value='c. 3rd Year (৩য় বর্ষ)' onChange={onChangeHanlder}/>
            <label htmlFor="q14c" className="ansc">c. 3rd Year (৩য় বর্ষ)</label>
          </li>
          <li>
            <input type="radio" name="Q14" id="q14d" className="ansList" value='d. 4th Year (৪র্থ বর্ষ)' onChange={onChangeHanlder}/>
            <label htmlFor="q14d" className="ansd">d. 4th Year (৪র্থ বর্ষ)
            </label>
          </li>
          <li>
            <input type="radio" name="Q14" id="q14e" className="ansList" value='e. Completed (কমপ্লি ট)' onChange={onChangeHanlder}/>
            <label htmlFor="q14e" className="ansd">e. Completed (কমপ্লি ট)

            </label>
          </li>
        </ul>
        
      </div>
      <div className="question-bar">
        <h2 className="qestion">15. What is your gender? (আপনার লিঙ্গ কি ?)</h2>
        <ul>
          <li>
            <input type="radio" name="Q15" id="q15a" className="ansList" value='a. Male (পুরুষ)' onChange={onChangeHanlder}/>
            <label htmlFor="q15a" className="ansa">a. Male (পুরুষ)
            </label>
          </li>
          <li>
            <input type="radio" name="Q15" id="q15b" className="ansList" value='b. Female (মহিলা)' onChange={onChangeHanlder}/>
            <label htmlFor="q15b" className="ansb">b. Female (মহিলা)
            </label>
          </li>
        </ul>
        
      </div>
      <div className="question-bar">
        <h2 className="qestion">16. What is your age? (আপনার বয়স কত?)

            </h2>
        <ul>
          <li>
            <input type="radio" name="Q16" id="q16a" className="ansList" value='a. 13-17 (১৩-১৭)' onChange={onChangeHanlder}/>
            <label htmlFor="q16a" className="ansa">a. 13-17 (১৩-১৭)

            </label>
          </li>
          <li>
            <input type="radio" name="Q16" id="q16b" className="ansList" value='b. 18-21 (১৮-২১)' onChange={onChangeHanlder}/>
            <label htmlFor="q16b" className="ansb">b. 18-21 (১৮-২১)

                </label>
          </li>
          <li>
            <input type="radio" name="Q16" id="q16c" className="ansList" value='c. 22-24 (২২-২৪)' onChange={onChangeHanlder}/>
            <label htmlFor="q16c" className="ansc">c. 22-24 (২২-২৪)
            </label>
          </li>
          <li>
            <input type="radio" name="Q16" id="q16d" className="ansList" value='d. 25+ (২৫+)' onChange={onChangeHanlder}/>
            <label htmlFor="q16d" className="ansd">d. 25+ (২৫+)
            </label>
          </li>
        </ul>
        
      </div> 
      <div className="footer-button text-center w-100">
        <button id="submit" type="button" onClick={()=> console.log(formData)} className="submitBtn w-100">Submit</button>
      </div>
    <div id="showscore" className="scoreArea"></div>
  </form>
  );
};

export default Survey;

