/*
interface Task {
    id?:string
    title:string
    email?:{description:string,link:url}
    due?:string
    tasks: Task[]
    notes?: string[]
    position?:string
}
*/

// Convert tasks of specified task list
function convertTasks(tk) {
    var taskList = tk[0];
    var tasks = tk[1];
    // if (!tasks) {
    //     document.appendChild(document.createTextNode("Task List " + taskList + " is empty."));
    //     return;
    // }

    //var pre = document.createElement('pre');
    //content.appendChild(pre);
    //pre.appendChild(document.createTextNode(taskList.title + '\n'))

    console.log('Tasks for list:');
    console.log(taskList);

    var root = { title: taskList.title, tasks: [] };
    //var tasks = response.result.items;

    if (tasks) {
        // a mapping from ids and tasks
        var taskMap = [];
        //for (var i = 0; i < tasks.length; i++) taskMap[tasks[i].id] = tasks[i];

        // We cannot assume that a task has a lower id than any of its children
        // We cannot even assume that the position field is unique 
        // So we sort by 'parent' (assuming that there is only one level of siblings)
        // and then by 'position', see https://developers.google.com/tasks/v1/reference/tasks
        // to ensure that parent and siblings are in the right order (parent precede children, siblings are in order)
        tasks.sort(function (a, b) {
            if (a.parent == b.id) { return 1; }

            if (b.parent == a.id) { return -1; }

            if (a.position >= b.position) {
                if (a.position == b.position) { return 0 } else { return 1 }
            } else return -1;
        });

        for (var i = 0; i < tasks.length; i++) {
            var task = tasks[i];
            //console.log(task);
            checkProps(knownTaskProps, task)

            var tk = { id: task.id, title: task.title, tasks: [] }

            if (task.links) {
                console.assert(task.links.length == 1, "EXPECTED SINGLE LINK BUT GOT", tasks.links);
                var link = task.links[0];
                console.assert(link.type == "email", "UNKNOWN LINK TYPE", link);
                tk.email = { description: link.description, link: link.link }
                //for (var i = 0; i < task.links.length; i++) {
                //var link = task.links[i];
                //console.assert(link.type == "email", "UNKNOWN LINK TYPE", link);
                //console.log(link)
                //t += " [" + (task.title == link.description ? "email" : link.description) + "](" + link.link + ")"
            }

            if (task.position) tk.position = task.position
            //if (task.due) tk.due = task.due
            // we preserve the date, we lose the time 
            if (task.due) tk.due = task.due.substring(0, 10)

            //if (task.notes) tk.title += ": " + task.notes.split(/\r?\n/).join(" ; ")
            if (task.notes) tk.notes = task.notes.split(/\r?\n/);

            var dad = task.parent ? taskMap[task.parent] : root;
            //console.log(dad);
            //console.log(dad.tasks.length == 0);
            //console.log(tk);
            //console.assert((!task.previous && dad.tasks.length == 0) || (dad.tasks[dad.tasks.length - 1].id == task.previous), "TASK PREVIOUS", task.previous, "DAD TASKS", dad.tasks)
            console.assert(dad.tasks.length == 0 || (tk.position > dad.tasks[dad.tasks.length - 1].position), "BAD TASK")
            //delete tk.position
            dad.tasks.push(tk);
            taskMap[tk.id] = tk;
            //pre.appendChild(document.createTextNode(task.title + '\n'))
            /*
            See 
            https://developers.google.com/google-apps/tasks/order
            https://developers.google.com/google-apps/tasks/params
            
            Task fields
            title:string
            ?links:[{type:"email|?",description:string,link:url}] 
            position:string
 

            */
        }

        //console.log(root);
        var node = document.createElement('pre');
        content.appendChild(node);
        printNode(node, 0, root)
    }
}

function printNode(content, level, task) {
    console.log('convert', task);
    var isRoot = level === 0
    //var prefix = level == 0 ? "\n# " : (level == 1 ? "\n## " : '  '.repeat(level - 2) + '- ')
    var prefix = isRoot ? "# " : '- ';
    var offset = "\n" + (isRoot ? "" : '  '.repeat(level - 1))

    var t = offset + prefix + task.title

    if (isRoot) t += "\n"

    if (task.email) {
        t += " [" + (task.title == task.email.description ? "email" : task.email.description) + "](" + task.email.link + ")"
    }
    // if (task.links) for (let i = 0; i < task.links.length; i++) {
    //     var link = task.links[i];
    //     console.assert(link.type == "email", "UNKNOWN LINK TYPE", link);
    //     //console.log(link)
    //     t += " [" + (task.title == link.description ? "email" : link.description) + "](" + link.link + ")"
    // }

    if (task.due) t += " DUE " + task.due

    //t += '\n' + (level < 2 ? '\n' : '')

    if (task.notes) {
        t += '\n';
        for (var i = 0; i < task.notes.length; i++) t += offset + '  ' + task.notes[i]
    }

    //var node = document.createTextNode(t);content.appendChild(node);
    content.appendChild(document.createTextNode(t));

    for (var i = 0; i < task.tasks.length; i++) printNode(content, level + 1, task.tasks[i])
}