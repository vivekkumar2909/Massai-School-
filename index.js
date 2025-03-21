
let temperatures = [25, 28, 30.4, 27.6, 26, 29, 31];


temperatures[3] += 2;


console.log("Updated Temperatures:", temperatures);



// question 13

// Step 1: Create an array with five tasks
let tasks = ["Complete report", "Review PR", "Team meeting", "Update documentation", "Send emails"];

// Step 2: Remove the first task manually (without using shift)
for (let i = 0; i < tasks.length - 1; i++) {
    tasks[i] = tasks[i + 1];
}
tasks.length--; // Reduce the array size manually

// Step 3: Add two high-priority tasks to the beginning manually
let highPriorityTasks = ["Fix critical bug", "Prepare client presentation"];
tasks = [...highPriorityTasks, ...tasks]; // Merge new tasks at the beginning

// Step 4: Replace the last task manually (without pop)
tasks[tasks.length - 1] = "Schedule one-on-one meetings";

// Step 5: Log the updated task list
console.log(tasks);
