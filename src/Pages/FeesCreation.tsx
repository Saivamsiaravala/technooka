import { NavLink } from "react-router-dom";
import vector1 from "./../assets/vector1.png";
import vector2 from "./../assets/vector2.png";

const semesters = [
  { id: 1, name: "One", path: "" },
  { id: 2, name: "Two", path: "sem-two" },
  { id: 3, name: "Three", path: "sem-three" },
  { id: 4, name: "Four", path: "sem-four" },
  { id: 5, name: "Five", path: "sem-five" },
  { id: 6, name: "Six", path: "sem-six" },
  { id: 7, name: "Seven", path: "sem-seven" },
  { id: 8, name: "Eight", path: "sem-eight" },
];

const data = [
  { id: 1, name: "Tuition Fee", amount: 30000 },
  { id: 2, name: "Lab Fee", amount: 10000 },
  { id: 3, name: "Sports Fee", amount: 10000 },
];

const payments = [
  { id: 1, status: "Pending", college: "College Name", image: vector1 },
  { id: 2, status: null, college: "College Name", image: vector2 },
  { id: 3, status: "Pending", college: "College Name", image: vector1 },
];

const FeesCreation = () => {
  return (
    <div className="fees">
      <div className="title">Fees Creation</div>
      <div className="underline-div"> </div>
      <div className="grids">
        <div className="name grid">
          <label htmlFor="">Name a Fees Creation</label>
          <input type="text" name="" id="" placeholder="Type Something" />
        </div>
        <div className="flex">
          <div className="level grid">
            <label htmlFor="">Program Level</label>
            <select name="" id="">
              <option value="" disabled>
                Select
              </option>
              <option value="1">Select</option>
              <option value="2">Select</option>
              <option value="3">Select</option>
            </select>{" "}
          </div>
          <div className="type grid">
            <label htmlFor="">Program Type</label>
            <select name="" id="">
              <option value="" disabled>
                Select
              </option>
              <option value="1">Select</option>
              <option value="2">Select</option>
              <option value="3">Select</option>
            </select>
          </div>
        </div>
        <div className="program grid">
          <label htmlFor="">Program Name</label>
          <select name="" id="">
            <option value="" disabled>
              Select
            </option>
            <option value="1">Select</option>
            <option value="2">Select</option>
            <option value="3">Select</option>
          </select>{" "}
        </div>
      </div>
      <div className="title2">Program Run in Colleges</div>
      <div className="payments">
        {payments.map((payment) => {
          return (
            <div key={payment.id} className={`payment${payment.id} payment`}>
              <div className="name">
                <div className="icon">
                  <img src={payment.image} alt="" />
                </div>

                <div className="college">
                  <div className="div2">{payment.college}</div>
                </div>
              </div>
              {payment.status && (
                <div className="status">
                  <div>
                    <p>{payment.status}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="details">
        <div className="title3">Fee Details</div>
        <div className="semesters">
          {semesters.map((semester) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "active semester" : "semester"
              }
              key={semester.id}
              to={semester.path}
            >
              Sem {semester.id}
            </NavLink>
          ))}
        </div>
        <div className="data">
          <div className="form">
            <div className="template">
              <label htmlFor="">Select Fees Payment Templates</label>
              <select name="" id="">
                <option value="" disabled>
                  Select
                </option>
                <option value="temp1">Template 1</option>
                <option value="temp2">Template 2</option>
                <option value="temp3">Template 3</option>
              </select>
            </div>
            <div className="fee1">
              <div className="name">
                <label htmlFor="">Fees Name</label>
                <input type="text" name="" id="" placeholder="Default" />
              </div>
              <div className="amount">
                <label htmlFor="">Fees Amount</label>
                <input type="number" name="" id="" placeholder="NUM" />
              </div>
            </div>
            <div className="fee1">
              <div className="name">
                <label htmlFor="">Fees Name</label>
                <input type="text" name="" id="" placeholder="Default" />
              </div>
              <div className="amount">
                <label htmlFor="">Fees Amount</label>
                <input type="number" name="" id="" placeholder="NUM" />
              </div>
            </div>
            <div className="fee1">
              <div className="name">
                <label htmlFor="">Fees Name</label>
                <input type="text" name="" id="" placeholder="Default" />
              </div>
              <div className="amount">
                <label htmlFor="">Fees Amount</label>
                <input type="number" name="" id="" placeholder="NUM" />
              </div>
            </div>
          </div>
          <div className="empty"></div>
          <div className="bill">
            <div className="bill-title">Total Fees Amount</div>
            <div className="bill-div">
              <div className="title-row">
                <div className="num">NO</div>
                <div className="name">Fees Name</div>
                <div className="amount">Fees Amount</div>
              </div>
              <div className="data">
                {data.map((item) => {
                  return (
                    <li key={item.id} className="item">
                      <div className="no">{item.id}</div>
                      <div className="name">{item.name}</div>
                      <div className="amount">{item.amount}</div>
                    </li>
                  );
                })}
              </div>
              <div className="final">
                <div className="total-title">Total Fees Amount</div>
                <input type="number" placeholder="NUM Total" />
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="apply">Next/Apply</div>
          <div className="cancel">Cancel</div>
        </div>
      </div>
      <div className="underline-div2"> </div>
    </div>
  );
};

export default FeesCreation;
