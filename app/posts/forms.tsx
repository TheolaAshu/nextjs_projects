export default function forms() {
  return (
    <form className="w-md flex flex-col gap-4">
      <label className="font-bold">First Name</label>
      <input
        className="border-2 border-gray-400 rounded-lg p-2 m-2"
        type="text"
      />
      <label className="font-bold">Last Name</label>
      <input
        className="border-2 border-gray-400 rounded-lg p-2 m-2"
        type="text"
      />
      <label className="font-bold">Phone Number</label>
      <input
        className="border-2 border-gray-400 rounded-lg p-2 m-2"
        type="text"
      />
    </form>
  );
}
