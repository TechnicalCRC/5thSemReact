export default function Person({ name, branch, course }) {
  // eslint-disable-next-line react/prop-types
//  let { name, branch, course } = props;
  return (
    <>
      <h2 className="bg-warning text-center text-white p-3">Person Details</h2>
      <p>
        Hello Mr. <b>{name}</b>{" "}
      </p>
      <p>
        You are in <span class="fw-bolder fs-2">{course}</span>
      </p>
      <p>
        Your branch is <b>{branch}</b>{" "}
      </p>
    </>
  );
}
