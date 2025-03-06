const Task = () => {

    const tasks = [
      {
        icon: "👥",
        description: "Approve team invite for James King",
        requestedBy: "Landon Shepherd",
        dueDate: "Mar 3",
      },
      {
        icon: "✉️",
        description: "Approve $1,042.95 payment to Jason Green",
        requestedBy: "Aluna T.",
        dueDate: "Mar 3",
      },
      {
        icon: "🔄",
        description: "Approve $5,000.00 recurring payment to Jason Green",
        requestedBy: "Aluna T.",
        dueDate: "Mar 3",
      },
      {
        icon: "👥",
        description: "Approve new daily maximum payment limit",
        requestedBy: "Landon Shepherd",
        dueDate: "Mar 3",
      },
      {
        icon: "👥",
        description: "Approve enabling the dual admin approval policy",
        requestedBy: "Landon Shepherd",
        dueDate: "Mar 3",
      },
    ];
  

    
    
    return (
      <div className="w-[1070px] p-5 bg-white rounded-lg">
        <h2 className="text-[28px] text-[#1e1e2a] font-semibold">Tasks</h2>
  
      
        <div className="mt-3 flex gap-2">
          <button className="border px-3 py-1 rounded-lg bg-[#E7E8F8] text-[#1e1e2a] font-medium">
            Incomplete
          </button>
          <button className="border px-3 py-1 rounded-lg bg-[#F7F7F9] text-[#70707d]">
            Completed
          </button>
        </div>
  

        <div className="mt-5 text-[13px] text-[#70707d] font-medium flex justify-between border-b pb-2">
          <p>Description</p>
          <div className="flex gap-10">
            <p>Due by</p>
            <p>Received</p>
          </div>
        </div>
  
       
        <div className="mt-3">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b text-[#1e1e2a]"
            >
              <div className="flex gap-3 items-center">
                <span className="text-[16px]">{task.icon}</span>
                <p className="text-[15px] text-[#1e1e2a]">
                  {task.description}{" "}
                  <span className="text-[#1e1e2a]"> (requested by {task.requestedBy})</span>
                </p>
              </div>
              <p className="text-[14px] text-[text-[#1e1e2a]]">{task.dueDate}</p>
            </div>
            
          ))}
        </div>
      </div>
    );
  };
  
  export default Task;
  