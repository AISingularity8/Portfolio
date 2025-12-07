// ==================== AUTHENTICATION ====================

// Demo credentials - In production, use a backend service
const DEMO_CREDENTIALS = {
    email: 'admin@example.com',
    password: 'password123'
};

// Local storage keys
const STORAGE_KEYS = {
    admin: 'adminPortfolioData',
    changes: 'adminRecentChanges',
    deployed: 'adminDeploymentStatus'
};

// Check if user is logged in on page load
window.addEventListener('load', () => {
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
    if (isLoggedIn) {
        showDashboard();
    } else {
        showLogin();
    }
});

// Login Form Handler
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;

    // Validate credentials
    if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        sessionStorage.setItem('adminEmail', email);
        showDashboard();
        loadPortfolioData();
        showNotification('Login successful!', 'success');
    } else {
        showNotification('Invalid email or password', 'error');
        document.getElementById('adminPassword').value = '';
    }
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.removeItem('adminLoggedIn');
    sessionStorage.removeItem('adminEmail');
    showLogin();
    showNotification('You have been logged out', 'success');
});

// Show/Hide Login and Dashboard
function showLogin() {
    document.getElementById('loginSection').style.display = 'flex';
    document.getElementById('dashboard').style.display = 'none';
}

function showDashboard() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('dashboard').style.display = 'grid';
    document.getElementById('userEmail').textContent = sessionStorage.getItem('adminEmail');
}

// ==================== TAB NAVIGATION ====================

// Tab Switching
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const tabName = item.getAttribute('data-tab');
        if (tabName) {
            switchTab(tabName);
        }
    });
});

function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
        // Add active class to corresponding nav item
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    }

    // Refresh content
    if (tabName === 'overview') {
        updateOverview();
    }
}

// Preview Site
document.getElementById('previewBtn').addEventListener('click', () => {
    window.open('index.html', '_blank');
});

// ==================== PERSONAL INFO ====================

document.getElementById('personalForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const personalData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
        bio: document.getElementById('bio').value,
        linkedIn: document.getElementById('linkedIn').value,
        github: document.getElementById('github').value,
        twitter: document.getElementById('twitter').value,
    };

    savePortfolioData('personal', personalData);
    addRecentChange('Updated personal information');
    showNotification('Personal information saved!', 'success');
});

// ==================== PROJECTS ====================

let editingProjectIndex = null;

document.getElementById('addProjectBtn').addEventListener('click', () => {
    editingProjectIndex = null;
    resetProjectForm();
    document.getElementById('projectFormContainer').style.display = 'block';
    document.getElementById('projectFormTitle').textContent = 'Add New Project';
});

document.getElementById('projectForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const projectData = {
        title: document.getElementById('projectTitle').value,
        description: document.getElementById('projectDescription').value,
        icon: document.getElementById('projectIcon').value || 'fa-robot',
        link: document.getElementById('projectLink').value,
        tags: document.getElementById('projectTags').value.split(',').map(t => t.trim())
    };

    let projects = getPortfolioData('projects') || [];

    if (editingProjectIndex !== null) {
        projects[editingProjectIndex] = projectData;
        addRecentChange(`Updated project: ${projectData.title}`);
    } else {
        projects.push(projectData);
        addRecentChange(`Added new project: ${projectData.title}`);
    }

    savePortfolioData('projects', projects);
    displayProjects();
    cancelProjectForm();
    showNotification('Project saved successfully!', 'success');
    updateOverview();
});

function cancelProjectForm() {
    document.getElementById('projectFormContainer').style.display = 'none';
    resetProjectForm();
    editingProjectIndex = null;
}

function resetProjectForm() {
    document.getElementById('projectForm').reset();
    document.getElementById('projectIcon').value = 'fa-robot';
}

function displayProjects() {
    const projects = getPortfolioData('projects') || [];
    const projectsList = document.getElementById('projectsList');

    if (projects.length === 0) {
        projectsList.innerHTML = '<p class="empty-message">No projects added yet. Click "Add New Project" to get started.</p>';
        return;
    }

    projectsList.innerHTML = projects.map((project, index) => `
        <div class="item-card">
            <div class="item-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="item-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="item-actions">
                <button class="btn btn-primary btn-small" onclick="editProject(${index})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn btn-danger btn-small" onclick="deleteProject(${index})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');
}

function editProject(index) {
    const projects = getPortfolioData('projects') || [];
    const project = projects[index];

    document.getElementById('projectTitle').value = project.title;
    document.getElementById('projectDescription').value = project.description;
    document.getElementById('projectIcon').value = project.icon;
    document.getElementById('projectLink').value = project.link || '';
    document.getElementById('projectTags').value = project.tags.join(', ');

    editingProjectIndex = index;
    document.getElementById('projectFormContainer').style.display = 'block';
    document.getElementById('projectFormTitle').textContent = 'Edit Project';
    document.getElementById('projectFormContainer').scrollIntoView({ behavior: 'smooth' });
}

function deleteProject(index) {
    if (confirm('Are you sure you want to delete this project?')) {
        let projects = getPortfolioData('projects') || [];
        const deletedTitle = projects[index].title;
        projects.splice(index, 1);
        savePortfolioData('projects', projects);
        displayProjects();
        addRecentChange(`Deleted project: ${deletedTitle}`);
        showNotification('Project deleted!', 'success');
        updateOverview();
    }
}

// ==================== SKILLS ====================

let editingSkillIndex = null;

document.getElementById('addSkillBtn').addEventListener('click', () => {
    editingSkillIndex = null;
    resetSkillForm();
    document.getElementById('skillFormContainer').style.display = 'block';
    document.getElementById('skillFormTitle').textContent = 'Add New Skill';
});

document.getElementById('skillForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const skillData = {
        name: document.getElementById('skillName').value,
        category: document.getElementById('skillCategory').value,
        proficiency: parseInt(document.getElementById('skillProficiency').value)
    };

    let skills = getPortfolioData('skills') || [];

    if (editingSkillIndex !== null) {
        skills[editingSkillIndex] = skillData;
        addRecentChange(`Updated skill: ${skillData.name}`);
    } else {
        skills.push(skillData);
        addRecentChange(`Added new skill: ${skillData.name}`);
    }

    savePortfolioData('skills', skills);
    displaySkills();
    cancelSkillForm();
    showNotification('Skill saved successfully!', 'success');
    updateOverview();
});

function cancelSkillForm() {
    document.getElementById('skillFormContainer').style.display = 'none';
    resetSkillForm();
    editingSkillIndex = null;
}

function resetSkillForm() {
    document.getElementById('skillForm').reset();
    document.getElementById('skillProficiency').value = 75;
    document.getElementById('proficiencyValue').textContent = '75%';
}

// Update proficiency display
document.getElementById('skillProficiency').addEventListener('input', (e) => {
    document.getElementById('proficiencyValue').textContent = e.target.value + '%';
});

function displaySkills() {
    const skills = getPortfolioData('skills') || [];
    const skillsList = document.getElementById('skillsList');

    if (skills.length === 0) {
        skillsList.innerHTML = '<p class="empty-message">No skills added yet. Click "Add New Skill" to get started.</p>';
        return;
    }

    // Group skills by category
    const categorized = {};
    skills.forEach((skill, index) => {
        if (!categorized[skill.category]) {
            categorized[skill.category] = [];
        }
        categorized[skill.category].push({ ...skill, index });
    });

    skillsList.innerHTML = Object.entries(categorized).map(([category, categorySkills]) => `
        <div class="item-card">
            <div class="item-info">
                <h3>${category}</h3>
                <div style="margin-top: 1rem;">
                    ${categorySkills.map(skill => `
                        <div style="margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center;">
                            <div style="flex: 1;">
                                <p style="margin-bottom: 0.5rem; font-weight: 600;">${skill.name}</p>
                                <div style="background: #ddd; height: 8px; border-radius: 4px; overflow: hidden;">
                                    <div style="background: linear-gradient(90deg, #1a73e8, #34a853); height: 100%; width: ${skill.proficiency}%;"></div>
                                </div>
                            </div>
                            <div style="margin-left: 1rem;">
                                <button class="btn btn-primary btn-small" onclick="editSkill(${skill.index})">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="btn btn-danger btn-small" onclick="deleteSkill(${skill.index})">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function editSkill(index) {
    const skills = getPortfolioData('skills') || [];
    const skill = skills[index];

    document.getElementById('skillName').value = skill.name;
    document.getElementById('skillCategory').value = skill.category;
    document.getElementById('skillProficiency').value = skill.proficiency;
    document.getElementById('proficiencyValue').textContent = skill.proficiency + '%';

    editingSkillIndex = index;
    document.getElementById('skillFormContainer').style.display = 'block';
    document.getElementById('skillFormTitle').textContent = 'Edit Skill';
    document.getElementById('skillFormContainer').scrollIntoView({ behavior: 'smooth' });
}

function deleteSkill(index) {
    if (confirm('Are you sure you want to delete this skill?')) {
        let skills = getPortfolioData('skills') || [];
        const deletedSkill = skills[index].name;
        skills.splice(index, 1);
        savePortfolioData('skills', skills);
        displaySkills();
        addRecentChange(`Deleted skill: ${deletedSkill}`);
        showNotification('Skill deleted!', 'success');
        updateOverview();
    }
}

// ==================== EDUCATION ====================

let editingEducationIndex = null;

document.getElementById('addEducationBtn').addEventListener('click', () => {
    editingEducationIndex = null;
    resetEducationForm();
    document.getElementById('educationFormContainer').style.display = 'block';
    document.getElementById('educationFormTitle').textContent = 'Add Education Entry';
});

document.getElementById('educationForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const educationData = {
        degree: document.getElementById('educationDegree').value,
        institution: document.getElementById('educationInstitution').value,
        startYear: document.getElementById('educationStartYear').value,
        endYear: document.getElementById('educationEndYear').value,
        description: document.getElementById('educationDescription').value
    };

    let education = getPortfolioData('education') || [];

    if (editingEducationIndex !== null) {
        education[editingEducationIndex] = educationData;
        addRecentChange(`Updated education: ${educationData.degree}`);
    } else {
        education.push(educationData);
        addRecentChange(`Added new education: ${educationData.degree}`);
    }

    savePortfolioData('education', education);
    displayEducation();
    cancelEducationForm();
    showNotification('Education entry saved!', 'success');
    updateOverview();
});

function cancelEducationForm() {
    document.getElementById('educationFormContainer').style.display = 'none';
    resetEducationForm();
    editingEducationIndex = null;
}

function resetEducationForm() {
    document.getElementById('educationForm').reset();
}

function displayEducation() {
    const education = getPortfolioData('education') || [];
    const educationList = document.getElementById('educationList');

    if (education.length === 0) {
        educationList.innerHTML = '<p class="empty-message">No education entries yet. Click "Add Education Entry" to get started.</p>';
        return;
    }

    educationList.innerHTML = education.map((edu, index) => `
        <div class="item-card">
            <div class="item-info">
                <h3>${edu.degree}</h3>
                <p style="color: #1a73e8; font-weight: 600;">${edu.institution}</p>
                <p style="color: #999; font-size: 0.9rem;">${edu.startYear} - ${edu.endYear}</p>
                ${edu.description ? `<p>${edu.description}</p>` : ''}
            </div>
            <div class="item-actions">
                <button class="btn btn-primary btn-small" onclick="editEducation(${index})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn btn-danger btn-small" onclick="deleteEducation(${index})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');
}

function editEducation(index) {
    const education = getPortfolioData('education') || [];
    const edu = education[index];

    document.getElementById('educationDegree').value = edu.degree;
    document.getElementById('educationInstitution').value = edu.institution;
    document.getElementById('educationStartYear').value = edu.startYear;
    document.getElementById('educationEndYear').value = edu.endYear;
    document.getElementById('educationDescription').value = edu.description || '';

    editingEducationIndex = index;
    document.getElementById('educationFormContainer').style.display = 'block';
    document.getElementById('educationFormTitle').textContent = 'Edit Education Entry';
    document.getElementById('educationFormContainer').scrollIntoView({ behavior: 'smooth' });
}

function deleteEducation(index) {
    if (confirm('Are you sure you want to delete this education entry?')) {
        let education = getPortfolioData('education') || [];
        const deletedDegree = education[index].degree;
        education.splice(index, 1);
        savePortfolioData('education', education);
        displayEducation();
        addRecentChange(`Deleted education: ${deletedDegree}`);
        showNotification('Education entry deleted!', 'success');
        updateOverview();
    }
}

// ==================== DEPLOYMENT ====================

document.getElementById('deployForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('githubUsername').value;
    const token = document.getElementById('githubToken').value;
    const repoName = document.getElementById('repoName').value;
    const message = document.getElementById('deployMessage').value;

    // Show loading state
    const deployBtn = e.target.querySelector('button[type="submit"]');
    const originalText = deployBtn.textContent;
    deployBtn.disabled = true;
    deployBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Deploying...';

    try {
        // For demonstration, we'll show instructions instead of actual deployment
        // In production, you would use GitHub API
        showNotification('Deployment guide opened - follow manual steps', 'warning');

        const instructions = `
        GitHub Deployment Instructions:

        1. Open Terminal/Command Prompt
        2. Navigate to your portfolio folder:
           cd C:\\Users\\aayus\\portfolio-website

        3. Initialize git (if not already done):
           git init
           git add .
           git commit -m "${message}"

        4. Add remote and push:
           git remote add origin https://github.com/${username}/${repoName}.git
           git branch -M main
           git push -u origin main

        5. Enable GitHub Pages:
           - Go to: https://github.com/${username}/${repoName}/settings/pages
           - Select "Deploy from a branch"
           - Choose: main branch
           - Save

        Your portfolio will be live at:
        https://${username}.github.io/${repoName}
        `;

        alert(instructions);

        savePortfolioData('deployment', {
            username,
            repoName,
            lastDeployed: new Date().toLocaleString()
        });

        addRecentChange(`Deployment prepared for ${username}/${repoName}`);
        document.getElementById('deployStatus').style.display = 'block';
        document.getElementById('deployStatus').className = 'status-message success';
        document.getElementById('deployStatus').innerHTML = `
            <strong>? Deployment Ready!</strong><br>
            Follow the instructions above to complete the deployment to GitHub.
        `;

        updateOverview();

    } catch (error) {
        document.getElementById('deployStatus').style.display = 'block';
        document.getElementById('deployStatus').className = 'status-message error';
        document.getElementById('deployStatus').innerHTML = `<strong>? Error:</strong> ${error.message}`;
        showNotification('Deployment failed: ' + error.message, 'error');
    } finally {
        deployBtn.disabled = false;
        deployBtn.textContent = originalText;
    }
});

// ==================== LOCAL STORAGE ====================

function savePortfolioData(key, value) {
    const allData = JSON.parse(localStorage.getItem(STORAGE_KEYS.admin)) || {};
    allData[key] = value;
    localStorage.setItem(STORAGE_KEYS.admin, JSON.stringify(allData));
}

function getPortfolioData(key) {
    const allData = JSON.parse(localStorage.getItem(STORAGE_KEYS.admin)) || {};
    return allData[key];
}

function loadPortfolioData() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEYS.admin)) || {};

    // Load personal data
    if (data.personal) {
        document.getElementById('fullName').value = data.personal.fullName || '';
        document.getElementById('email').value = data.personal.email || '';
        document.getElementById('phone').value = data.personal.phone || '';
        document.getElementById('location').value = data.personal.location || '';
        document.getElementById('bio').value = data.personal.bio || '';
        document.getElementById('linkedIn').value = data.personal.linkedIn || '';
        document.getElementById('github').value = data.personal.github || '';
        document.getElementById('twitter').value = data.personal.twitter || '';
    }

    // Display projects, skills, and education
    displayProjects();
    displaySkills();
    displayEducation();

    // Update overview
    updateOverview();
}

// ==================== RECENT CHANGES ====================

function addRecentChange(change) {
    let changes = JSON.parse(localStorage.getItem(STORAGE_KEYS.changes)) || [];
    changes.unshift({
        text: change,
        timestamp: new Date().toLocaleString()
    });
    // Keep only last 10 changes
    changes = changes.slice(0, 10);
    localStorage.setItem(STORAGE_KEYS.changes, JSON.stringify(changes));
}

function displayRecentChanges() {
    const changes = JSON.parse(localStorage.getItem(STORAGE_KEYS.changes)) || [];
    const changesList = document.getElementById('recentChangesList');

    if (changes.length === 0) {
        changesList.innerHTML = '<li>No changes yet</li>';
        return;
    }

    changesList.innerHTML = changes.map(change => `
        <li>
            <strong>${change.text}</strong><br>
            <small style="color: #999;">${change.timestamp}</small>
        </li>
    `).join('');
}

// ==================== OVERVIEW ====================

function updateOverview() {
    const projects = getPortfolioData('projects') || [];
    const skills = getPortfolioData('skills') || [];
    const education = getPortfolioData('education') || [];

    document.getElementById('projectCount').textContent = projects.length;
    document.getElementById('skillCount').textContent = skills.length;
    document.getElementById('educationCount').textContent = education.length;

    const deployed = JSON.parse(localStorage.getItem(STORAGE_KEYS.deployed));
    document.getElementById('deployStatus').textContent = deployed ? 'Deployed' : 'Not Deployed';

    displayRecentChanges();
}

// ==================== NOTIFICATIONS ====================

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Initialize on page load
window.addEventListener('load', () => {
    displayRecentChanges();
});
