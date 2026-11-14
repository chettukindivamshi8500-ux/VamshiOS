// ===================================
// VAMSHIOS - INTERACTIVE DESKTOP
// ===================================

// VAMSHIOS LIVE CLOCK

function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();

    const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

    const date = now.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    clock.innerHTML = `
        <div class="clock-time">${time}</div>
        <div class="clock-date">${date}</div>
    `;
}

updateClock();
setInterval(updateClock, 1000);
// Application Data
const applications = {
   about: {
    title: "About Vamshi",
    icon: "👨‍💻",
    content: `
        <div class="app-content about-dashboard">

            <div class="about-hero">
                <div class="about-avatar">👨‍💻</div>
                <h2>Hey, I'm Vamshi!</h2>
                <p class="about-role">Aspiring Software Developer</p>
                <span class="about-status">🟢 Open to Learning & Opportunities</span>
            </div>

            <div class="about-section">
                <h3>🚀 Who Am I?</h3>
                <p>
                    I'm Chettukindi Vamshi, a third-year B.Tech
                    Computer Science student graduating in 2028.
                </p>
                <p>
                    I'm passionate about software development,
                    web technologies, DevOps and data analytics.
                    I enjoy building practical projects and
                    exploring new technologies.
                </p>
            </div>

            <div class="about-section">
                <h3>🎓 Education</h3>
                <p><strong>Degree:</strong> B.Tech - Computer Science</p>
                <p><strong>Year:</strong> Third Year</p>
                <p><strong>Graduation:</strong> 2028</p>
                <p><strong>Location:</strong> Hyderabad, India</p>
            </div>

            <div class="about-section">
                <h3>💡 My Interests</h3>
                <div class="skill-tags">
                    <span>Software Development</span>
                    <span>Web Development</span>
                    <span>DevOps</span>
                    <span>Data Analytics</span>
                    <span>Problem Solving</span>
                </div>
            </div>

            <div class="about-section">
                <h3>🎯 My Goal</h3>
                <p>
                    To become a skilled software developer,
                    build meaningful applications and contribute
                    to real-world technology projects.
                </p>
            </div>

        </div>`
},

    projects: {
    title: "Project Explorer",
    icon: "📁",
    content: `
        <div class="app-content">
            <h2>🚀 My Projects</h2>
            <p>Things I've built and technologies I've explored.</p>

            <div class="project-item">
                <h3>⏱️ P8 Timer</h3>
                <p>A simple interactive timer application.</p>
                <p>HTML • CSS • JavaScript</p>
                <a href="https://github.com/chettukindivamshi8500-ux/p8-timer" target="_blank">GitHub ↗</a>
            </div>

            <div class="project-item">
                <h3>📝 P9 Register</h3>
                <p>A registration page with a user-friendly interface.</p>
                <p>HTML • CSS • JavaScript</p>
                <a href="https://github.com/chettukindivamshi8500-ux/p9-register" target="_blank">GitHub ↗</a>
            </div>

            <div class="project-item">
                <h3>📋 P10 Todo List</h3>
                <p>An application for managing daily tasks.</p>
                <p>HTML • CSS • JavaScript</p>
                <a href="https://github.com/chettukindivamshi8500-ux/p10-todolist" target="_blank">GitHub ↗</a>
            </div>

            <div class="project-item">
                <h3>💰 P12 Expense Tracker</h3>
                <p>Track and manage personal expenses.</p>
                <p>HTML • CSS • JavaScript</p>
                <a href="https://github.com/chettukindivamshi8500-ux/p12-expense-tracker" target="_blank">GitHub ↗</a>
            </div>

            <div class="project-item">
                <h3>🛡️ BrandPhantom</h3>
                <p>Digital Risk Protection and Social & App Monitoring platform.</p>
                <p>Python • Streamlit • Plotly</p>
                <a href="https://brandphantom.streamlit.app/" target="_blank">Live Demo ↗</a>
            </div>

            <div class="project-item">
                <h3>📊 Car Sales Analysis</h3>
                <p>Data analytics and visualization project.</p>
                <p>Tableau • Data Analytics</p>
            </div>
        </div>`
},

    skills: {
    title: "Skills Dashboard",
    icon: "⚡",
    content: `
        <div class="app-content skills-dashboard">

            <h2>⚡ Technical Skills</h2>
            <p>Technologies I'm learning and working with.</p>

            <div class="skill-category">
                <h3>💻 Programming Languages</h3>

                <div class="skill">
                    <span>Python</span>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 75%"></div>
                    </div>
                </div>

                <div class="skill">
                    <span>JavaScript</span>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 70%"></div>
                    </div>
                </div>
            </div>

            <div class="skill-category">
                <h3>🌐 Web Development</h3>

                <div class="skill">
                    <span>HTML & CSS</span>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 85%"></div>
                    </div>
                </div>

                <div class="skill">
                    <span>React.js</span>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 45%"></div>
                    </div>
                </div>

                <div class="skill">
                    <span>Node.js & Express.js</span>
                    <div class="skill-bar">
                        <div class="skill-progress" style="width: 50%"></div>
                    </div>
                </div>
            </div>

            <div class="skill-category">
                <h3>📊 Data Analytics</h3>
                <div class="skill-tags">
                    <span>Tableau</span>
                    <span>Power BI</span>
                    <span>Pandas</span>
                </div>
            </div>

            <div class="skill-category">
                <h3>🛠️ Tools & Technologies</h3>
                <div class="skill-tags">
                    <span>Git</span>
                    <span>GitHub</span>
                    <span>Docker</span>
                    <span>Jenkins</span>
                    <span>VS Code</span>
                    <span>Flutter</span>
                    <span>Streamlit</span>
                </div>
            </div>

        </div>`
},

   contact: {
    title: "Contact Me",
    icon: "📬",
    content: `
        <div class="app-content contact-dashboard">
            <div class="about-hero">
                <div class="about-avatar">📬</div>
                <h2>Let's Connect!</h2>
                <p class="about-role">Have an idea or opportunity?</p>
                <span class="about-status">🟢 Available for Connections</span>
            </div>

            <div class="about-section">
                <h3>📧 Email</h3>
                <p>chettukindivamshi850@gmail.com</p>
                <a href="mailto:chettukindivamshi850@gmail.com">
                    Send Me an Email →
                </a>
                <button class="copy-email-btn"
                    onclick="navigator.clipboard.writeText('chettukindivamshi850@gmail.com').then(() => alert('Email copied!'))">
                    📋 Copy Email
                </button>
            </div>

            <div class="about-section">
                <h3>💻 GitHub</h3>
                <p>Explore my projects and code.</p>
                <a href="https://github.com/chettukindivamshi850-ux"
                   target="_blank">
                    Visit GitHub →
                </a>
            </div>

            <div class="about-section">
                <h3>💼 LinkedIn</h3>
                <p>Let's connect professionally.</p>
                <a href="https://www.linkedin.com/in/vamshi-c-8500k3/"
                   target="_blank">
                    Connect on LinkedIn →
                </a>
            </div>
        </div>
    `
},
   resume: {
    title: "My Resume",
    icon: "📄",
    content: `
        <div class="app-content about-dashboard">
            <div class="about-hero">
                <div class="about-avatar">📄</div>
                <h2>Chettukindi Vamshi</h2>
                <p class="about-role">Aspiring Software Developer</p>
                <span class="about-status">B.Tech CSE | Class of 2028</span>
            </div>

            <div class="about-section">
                <h3>🎓 Education</h3>
                <p><strong>B.Tech – Computer Science and Engineering</strong></p>
                <p>St. Mary's Group of Institutions, Hyderabad</p>
                <p>Expected Graduation: 2028</p>
            </div>

            <div class="about-section">
                <h3>💻 Technical Skills</h3>
                <p>Python, JavaScript, HTML, CSS, React.js</p>
                <p>Node.js, Express.js, Streamlit, Flutter</p>
                <p>Tableau, Power BI, Git, GitHub, Docker, Jenkins</p>
            </div>

            <div class="about-section">
                <h3>🚀 Projects</h3>
                <p><strong>BrandPhantom:</strong> Digital Risk Protection Dashboard</p>
                <p><strong>Expense Tracker:</strong> Personal expense management application</p>
                <p><strong>To-Do List:</strong> Task management application</p>
                <p><strong>Car Sales Analysis:</strong> Data visualization using Tableau</p>
            </div>

            <div class="about-section">
                <h3>🏆 Certifications & Workshops</h3>
                <p>HacXLerate 2026 – Hackathon Participation</p>
                <p>UI/UX Design Workshop – Figma</p>
            </div>

            <div class="about-section">
                <h3>📬 Contact</h3>
                <p>chettukindivamshi8500@gmail.com</p>
                <p>Hyderabad, India</p>
            </div>

            <button onclick="downloadResumePDF()">
                📥 Download Resume PDF
            </button>
        </div>
    `
},
taskmanager: {
    title: "Task Manager",
    icon: "⚙️",
    content: `
        <div class="app-content task-manager">
            <h2>⚙️ Task Manager</h2>
            <p>Monitor your running applications</p>

            <div class="task-stats">
                <div class="task-stat">
                    <span>Running Apps</span>
                    <strong id="running-app-count">0</strong>
                </div>
                <div class="task-stat">
                    <span>System Status</span>
                    <strong style="color:#42e695;">Active</strong>
                </div>
            </div>

            <h3>Running Applications</h3>
            <div id="task-manager-list">
                <p>Loading applications...</p>
            </div>

            <button id="refresh-task-manager">🔄 Refresh</button>
        </div>
    `
},

    settings: {
    title: "Settings",
    icon: "⚙️",
    content: `
        <div class="app-content settings-app">
            <h2>⚙️ VamshiOS Settings</h2>
            <p>Personalize your desktop experience.</p>

            <div class="settings-section">
                <h3>🎨 Appearance</h3>
                <label>Theme</label>
                <select id="theme-select">
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                </select>

                <label>Accent Colour</label>
                <input type="color" id="accent-picker" value="#42e695">

                <label>Wallpaper</label>
                <select id="wallpaper-select">
                    <option value="default">Default</option>
                    <option value="green">Green Glow</option>
                    <option value="purple">Purple Glow</option>
                </select>
            </div>

            <div class="settings-section">
                <h3>💻 System Information</h3>
                <p>Operating System: VamshiOS</p>
                <p>Version: 1.0</p>
                <p>Developer: Chettukindi Vamshi</p>
                <p>Platform: Web Browser</p>
            </div>

            <button id="reset-settings">Reset Settings</button>
        </div>
    `
},
    terminal: {
        title: "VamshiOS Terminal",
        icon: "⌨️",
        content: `
            <div class="terminal-content">
                <p>Welcome to VamshiOS Terminal 👋</p>
                <p>Type <span>help</span> to see available commands.</p>
                <div id="terminal-output"></div>
                <div class="terminal-input-line">
                    <span>vamshi@os:~$</span>
                    <input id="terminal-input" type="text"
                           autocomplete="off" spellcheck="false">
                </div>
            </div>`
    }
};


// Window layering
let highestZIndex = 101;


// Open Application
function openApp(appName) {
    const app = applications[appName];

    if (!app) return;

    let win = document.getElementById("window-" + appName);

    if (win) {
        win.style.display = "flex";
        bringToFront(win);
        return;
    }

    win = document.createElement("div");
    win.className = "app-window";
    win.id = "window-" + appName;

    win.innerHTML = `
        <div class="window-header">
            <span>${app.icon} ${app.title}</span>

            <div class="window-controls">
                <button class="minimize-btn" title="Minimize">−</button>
                <button class="maximize-btn" title="Maximize">□</button>
                <button class="close-btn" title="Close">×</button>
            </div>
        </div>

        <div class="window-body">
            ${app.content}
        </div>
    `;

    document.body.appendChild(win);

    bringToFront(win);
    makeDraggable(win);

    // Close
    win.querySelector(".close-btn").addEventListener("click", () => {
    win.classList.add("closing");

    setTimeout(() => {
        win.remove();
    }, 200);
});

    // Minimize
    win.querySelector(".minimize-btn").addEventListener("click", () => {
        win.style.display = "none";
    });

    // Maximize / Restore
    const maximizeButton = win.querySelector(".maximize-btn");

    maximizeButton.addEventListener("click", () => {
        win.classList.toggle("maximized");

        maximizeButton.textContent =
            win.classList.contains("maximized") ? "❐" : "□";
    });

    win.addEventListener("pointerdown", () => bringToFront(win));
if (appName === "terminal") {
    setupTerminal();
}

if (appName === "taskmanager") {
    setupTaskManager();
}

if (appName === "settings") {
    setupSettings();
}
}

// Bring window to front
function bringToFront(win) {
    highestZIndex++;
    win.style.zIndex = highestZIndex;
}


// Drag Application Windows
function makeDraggable(win) {
    const header = win.querySelector(".window-header");

    let startX = 0;
    let startY = 0;
    let initialLeft = 0;
    let initialTop = 0;

    header.addEventListener("pointerdown", (event) => {
        if (event.target.closest("button")) return;
        if (win.classList.contains("maximized")) return;

        event.preventDefault();
        bringToFront(win);

        const rect = win.getBoundingClientRect();

        startX = event.clientX;
        startY = event.clientY;

        initialLeft = rect.left;
        initialTop = rect.top;

        win.style.left = initialLeft + "px";
        win.style.top = initialTop + "px";
        win.style.transform = "none";

        header.setPointerCapture(event.pointerId);
    });

    header.addEventListener("pointermove", (event) => {
        if (!header.hasPointerCapture(event.pointerId)) return;

        const newLeft = initialLeft + event.clientX - startX;
        const newTop = initialTop + event.clientY - startY;

        const maxLeft = Math.max(0, window.innerWidth - win.offsetWidth);
        const maxTop = Math.max(65, window.innerHeight - win.offsetHeight - 70);

        win.style.left =
            Math.max(0, Math.min(newLeft, maxLeft)) + "px";

        win.style.top =
            Math.max(65, Math.min(newTop, maxTop)) + "px";
    });

    header.addEventListener("pointerup", (event) => {
        if (header.hasPointerCapture(event.pointerId)) {
            header.releasePointerCapture(event.pointerId);
        }
    });
}
// Desktop icon click events
document.querySelectorAll(".app-icon").forEach(icon => {
    icon.addEventListener("click", () => {
        const appName = icon.dataset.app;
        openApp(appName);
    });
});
document.querySelectorAll(".dock-item[data-app]").forEach(item => {
    item.addEventListener("click", () => {
        openApp(item.dataset.app);
    });
});
// Desktop Right Click Menu

const contextMenu = document.getElementById("context-menu");

document.addEventListener("contextmenu", (event) => {
    if (event.target.closest(".app-window")) return;

    event.preventDefault();

    contextMenu.classList.add("show");

    const menuWidth = contextMenu.offsetWidth;
    const menuHeight = contextMenu.offsetHeight;

    contextMenu.style.left =
        Math.min(event.clientX, window.innerWidth - menuWidth - 5) + "px";

    contextMenu.style.top =
        Math.min(event.clientY, window.innerHeight - menuHeight - 5) + "px";
});

document.addEventListener("click", (event) => {
    if (!contextMenu.contains(event.target)) {
        contextMenu.classList.remove("show");
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        contextMenu.classList.remove("show");
    }
});

document.getElementById("refresh-desktop").addEventListener("click", () => {
    location.reload();
});

document.getElementById("open-terminal").addEventListener("click", () => {
    openApp("terminal");
});

document.getElementById("about-vamshios").addEventListener("click", () => {
    openApp("about");
});
function downloadResumePDF() {
    const resumeWindow = window.open("", "_blank");

    resumeWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Vamshi Resume</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    color: #222;
                    padding: 35px;
                    line-height: 1.5;
                }
                h1 { color: #142B3B; margin-bottom: 5px; }
                h2 {
                    color: #15966A;
                    border-bottom: 1px solid #15966A;
                    padding-bottom: 5px;
                    margin-top: 22px;
                }
                p { margin: 5px 0; }
                a { color: #15966A; }
                @media print {
                    body { padding: 0; }
                }
            </style>
        </head>
        <body>
            <h1>CHETTUKINDI VAMSHI</h1>
            <p><strong>Aspiring Software Developer | B.Tech CSE</strong></p>
            <p>Hyderabad, India</p>
            <p>Email: chettukindivamshi8500@gmail.com</p>
            <p>
                GitHub: github.com/chettukindivamshi8500-ux<br>
                LinkedIn: linkedin.com/in/vamshi-c-8500k3
            </p>

            <h2>CAREER OBJECTIVE</h2>
            <p>Motivated third-year Computer Science and Engineering student
            interested in software development, web technologies, DevOps
            and data analytics. Eager to learn and contribute to real-world
            projects through internship opportunities.</p>

            <h2>EDUCATION</h2>
            <p><strong>B.Tech – Computer Science and Engineering</strong></p>
            <p>St. Mary's Group of Institutions, Hyderabad</p>
            <p>Expected Graduation: 2028</p>

            <h2>TECHNICAL SKILLS</h2>
            <p><strong>Programming:</strong> Python, JavaScript</p>
            <p><strong>Web:</strong> HTML, CSS, React.js, Node.js, Express.js</p>
            <p><strong>Data:</strong> Tableau, Power BI, Pandas</p>
            <p><strong>Tools:</strong> Git, GitHub, Docker, Jenkins, VS Code</p>
            <p><strong>Other:</strong> Streamlit, Flutter, Figma (workshop exposure)</p>

            <h2>PROJECTS</h2>
            <p><strong>BrandPhantom:</strong> Digital Risk Protection Dashboard
            using Python, Streamlit, Plotly and Pandas.</p>
            <p><strong>Expense Tracker:</strong> Personal expense management application.</p>
            <p><strong>To-Do List:</strong> Task management application.</p>
            <p><strong>P8 Timer and P9 Register:</strong> Practice applications.</p>
            <p><strong>Car Sales Analysis:</strong> Data visualization using Tableau.</p>

            <h2>CERTIFICATIONS & WORKSHOPS</h2>
            <p>HacXLerate 2026 – Hackathon Participation Certificate.</p>
            <p>UI/UX Design Workshop – Figma.</p>
        </body>
        </html>
    `);

    resumeWindow.document.close();
    resumeWindow.onload = function () {
        resumeWindow.print();
    };
}
// VAMSHIOS START MENU

const startButton = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");

// Open and close Start Menu
startButton.addEventListener("click", (event) => {
    event.stopPropagation();
    startMenu.classList.toggle("show");
});

// Close when clicking outside
document.addEventListener("click", (event) => {
    const clickedInsideMenu = startMenu.contains(event.target);
    const clickedStartButton = startButton.contains(event.target);

    if (!clickedInsideMenu && !clickedStartButton) {
        startMenu.classList.remove("show");
    }
});

// Open apps from Start Menu
document.querySelectorAll("[data-start-app]").forEach(button => {
    button.addEventListener("click", () => {
        const appName = button.dataset.startApp;

        startMenu.classList.remove("show");
        openApp(appName);
    });
});

// Close with Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        startMenu.classList.remove("show");
    }
});
// START MENU APP SEARCH

const appSearch = document.getElementById("app-search");
const startAppButtons = document.querySelectorAll("[data-start-app]");

appSearch.addEventListener("input", () => {
    const searchValue = appSearch.value.toLowerCase();

    startAppButtons.forEach(button => {
        const appName = button.innerText.toLowerCase();

        button.style.display = appName.includes(searchValue)
            ? "flex"
            : "none";
    });
});
document.getElementById("power-button").addEventListener("click", () => {
    if (confirm("Are you sure you want to exit VamshiOS?")) {
        document.body.innerHTML = `
            <div style="height:100vh;display:flex;align-items:center;
            justify-content:center;background:#080d12;color:#42e695;
            font-family:Arial;text-align:center;">
                <div>
                    <h1>VamshiOS</h1>
                    <p>Session ended. See you again, Vamshi! 👋</p>
                    <button onclick="location.reload()">Restart VamshiOS</button>
                </div>
            </div>`;
    }
});
// NOTIFICATION CENTER

const notificationButton = document.getElementById("notification-button");
const notificationCenter = document.getElementById("notification-center");

const closeNotifications = document.getElementById("close-notifications");
const notificationDate = document.getElementById("notification-date");

// Open notification center
notificationButton.addEventListener("click", (event) => {
    event.stopPropagation();

    notificationCenter.classList.toggle("show");

    // Close Start Menu
    startMenu.classList.remove("show");
});

// Close notification center
closeNotifications.addEventListener("click", () => {
    notificationCenter.classList.remove("show");
});

// Display current date and time
function updateNotificationDate() {
    const now = new Date();

    notificationDate.textContent = now.toLocaleString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}

updateNotificationDate();
setInterval(updateNotificationDate, 60000);

// Clear all notifications
document.getElementById("clear-notifications").addEventListener("click", () => {
    document.getElementById("notification-list").innerHTML =
        "<p style='color:#aaa;text-align:center;padding:20px;'>No notifications 🎉</p>";
});

// Quick settings
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    this.classList.toggle("active");
});

document.getElementById("wifi-toggle").addEventListener("click", function () {
    this.classList.toggle("active");
    this.textContent = this.classList.contains("active")
        ? "📶 Wi-Fi On"
        : "📶 Wi-Fi Off";
});

document.getElementById("sound-toggle").addEventListener("click", function () {
    this.classList.toggle("active");
    this.textContent = this.classList.contains("active")
        ? "🔊 Sound On"
        : "🔇 Sound Off";
});

// Close when clicking outside
document.addEventListener("click", (event) => {
    if (
        !notificationCenter.contains(event.target) &&
        !notificationButton.contains(event.target)
    ) {
        notificationCenter.classList.remove("show");
    }
});
// TASK MANAGER FUNCTIONALITY

function setupTaskManager() {
    const taskList = document.getElementById("task-manager-list");
    const appCount = document.getElementById("running-app-count");
    const refreshButton = document.getElementById("refresh-task-manager");

    function refreshTaskList() {
        const windows = document.querySelectorAll(".app-window");

        const runningApps = Array.from(windows).filter(win =>
            win.style.display !== "none" &&
            !win.classList.contains("closing")
        );

        appCount.textContent = runningApps.length;

        if (runningApps.length === 0) {
            taskList.innerHTML = "<p>No running applications.</p>";
            return;
        }

        taskList.innerHTML = runningApps.map(win => {
            const appName = win.id.replace("window-", "");
            const app = applications[appName];

            if (!app) return "";

            return `
                <div class="task-item">
                    <div>
                        <strong>${app.icon} ${app.title}</strong>
                        <small>Running</small>
                    </div>
                    <button data-close-app="${appName}">
                        End Task
                    </button>
                </div>
            `;
        }).join("");

        taskList.querySelectorAll("[data-close-app]").forEach(button => {
            button.addEventListener("click", () => {
                const appName = button.dataset.closeApp;
                const targetWindow = document.getElementById("window-" + appName);

                if (targetWindow) {
                    targetWindow.remove();
                    refreshTaskList();
                }
            });
        });
    }

    refreshTaskList();

    refreshButton.addEventListener("click", refreshTaskList);
}
// VAMSHIOS TERMINAL
function setupTerminal() {
    const input = document.getElementById("terminal-input");
    const output = document.getElementById("terminal-output");

    if (!input || !output) return;

    input.focus();

    function runCommand(command) {
        const cmd = command.trim().toLowerCase();

        output.innerHTML += `<p><span>vamshi@os:~$</span> ${command}</p>`;

        switch (cmd) {
            case "help":
                output.innerHTML += `
                    <p>Available commands:</p>
                    <p>help - Show commands</p>
                    <p>about - About Vamshi</p>
                    <p>projects - View projects</p>
                    <p>skills - View skills</p>
                    <p>contact - Contact details</p>
                    <p>date - Show current date</p>
                    <p>time - Show current time</p>
                    <p>clear - Clear terminal</p>
                `;
                break;

            case "about":
                output.innerHTML += "<p>I am Vamshi, a B.Tech CSE student and developer.</p>";
                break;

            case "projects":
                output.innerHTML += "<p>BrandPhantom | Car Sales Analysis</p>";
                break;

            case "skills":
                output.innerHTML += "<p>Python, JavaScript, HTML, CSS, React, Node.js, Git, Docker.</p>";
                break;

            case "contact":
                output.innerHTML += "<p>Email: chettukindivamshi8500@gmail.com</p>";
                break;

            case "date":
                output.innerHTML += `<p>${new Date().toLocaleDateString("en-IN")}</p>`;
                break;

            case "time":
                output.innerHTML += `<p>${new Date().toLocaleTimeString("en-IN")}</p>`;
                break;

            case "clear":
                output.innerHTML = "";
                break;

            case "":
                break;

            default:
                output.innerHTML += `<p>Command not found: ${command}. Type help.</p>`;
        }

        output.scrollTop = output.scrollHeight;
    }

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const command = input.value;
            input.value = "";
            runCommand(command);
        }
    });
}