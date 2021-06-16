import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { addMember, updateMember } from "../store/actions";
import { Switch } from "react-router";
import { useSelector } from "react-redux";

const CreateForm = () => {
  const memberSlug = useParams().memberSlug;
  const members = useSelector((state) => state.members);
  const foundMembers = members.find((member) => member.Slug === memberSlug);

  const dispatch = useDispatch();
  const history = useHistory();
  const [member, setmember] = useState(
    foundMembers ?? {
      firstName: "",
      lastName: "",
      currentlyBorrowedBooks: "",
      membership: "",
        }
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundMembers) dispatch(updateMember(member));
    else dispatch(addMember(member));
    history.push("/members");
  };

  const handleChange = (event) => {
    setmember({ ...member, [event.target.name]: event.target.value });
  };
  return (
    <Switch>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label>First Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter First Name "
            name="firstName"
            value={member.firstName}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>Last Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Last Name "
            value={member.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>currentlyBorrowedBooks</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter..... "
            name="currentlyBorrowedBooks"
            value={member.currentlyBorrowedBooks}
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>Membership</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Membership "
            value={member.membership}
            name="membership"
            onChange={handleChange}
          />
        </div>
        {/* <div class="form-group">
          <label>available</label>
          <input
            type="text"
            class="form-control"
            placeholder="add your member image "
            value={member.available}
            name="available"
            onChange={handleChange}
          />
        </div>
        <div class="form-group">
          <label>available</label>
          <select
            name="available"
            onChange={handleChange}
            value={member.available}
          >
            <option> {true ? "available" : "not available"}</option>
          </select>
        </div>
        <div class="form-group">
          <label>borrowedBy</label>
          <input
            type="text"
            class="form-control"
            placeholder="add  borrowedBy "
            value={member.borrowedBy}
            name="borrowedBy"
            onChange={handleChange}
          />
        </div> */}
        <button type="submit" class="btn btn-primary">
          {CreateForm ? "add" : `edit`}
        </button>
      </form>{" "}
    </Switch>
  );
};

export default CreateForm;
