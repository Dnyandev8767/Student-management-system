/**
 * EduPulse - Student Management System (Frontend)
 * High-performance vanilla JavaScript administrative dashboard controller.
 */

(() => {
  'use strict';

  // ==================== STORAGE KEYS & CONSTANTS ====================
  const STORAGE_KEY = 'eduPulse_students_v2';
  const THEME_KEY = 'eduPulse_theme';
  const VIEW_KEY = 'eduPulse_view_mode';

  // Seed sample records for immediate rich preview
  const INITIAL_SEED_DATA = [
    {
      id: 'std_seed_1',
      rollNumber: 'CS-2023-014',
      fullName: 'Eleanor Vance',
      email: 'eleanor.vance@univ.edu',
      phone: '9845012345',
      gender: 'Female',
      dateOfBirth: '2004-03-15',
      department: 'Computer Science',
      semester: '3rd Year',
      gpa: 3.92,
      status: 'Active',
      address: '742 Evergreen Terrace, North Wing',
      avatarColor: '#4f46e5',
      createdAt: '2025-08-10T09:00:00.000Z'
    },
    {
      id: 'std_seed_2',
      rollNumber: 'AI-2024-008',
      fullName: 'Marcus Sterling',
      email: 'marcus.sterling@univ.edu',
      phone: '9876543210',
      gender: 'Male',
      dateOfBirth: '2003-11-22',
      department: 'Artificial Intelligence',
      semester: '2nd Year',
      gpa: 3.85,
      status: 'Active',
      address: '12 Innovation Way, Tech Campus',
      avatarColor: '#0284c7',
      createdAt: '2025-08-11T10:15:00.000Z'
    },
    {
      id: 'std_seed_3',
      rollNumber: 'EE-2022-042',
      fullName: 'Sophia Rodriguez',
      email: 'sophia.rodriguez@univ.edu',
      phone: '9765432109',
      gender: 'Female',
      dateOfBirth: '2002-07-08',
      department: 'Electrical Engineering',
      semester: '4th Year',
      gpa: 3.74,
      status: 'Active',
      address: '88 Faraday Court, Edison Hall',
      avatarColor: '#10b981',
      createdAt: '2025-08-12T11:30:00.000Z'
    },
    {
      id: 'std_seed_4',
      rollNumber: 'ME-2023-029',
      fullName: 'Liam Chen',
      email: 'liam.chen@univ.edu',
      phone: '9654321098',
      gender: 'Male',
      dateOfBirth: '2004-05-30',
      department: 'Mechanical Engineering',
      semester: '3rd Year',
      gpa: 3.45,
      status: 'Active',
      address: '302 Gear Works Rd, West Campus',
      avatarColor: '#f59e0b',
      createdAt: '2025-08-13T14:45:00.000Z'
    },
    {
      id: 'std_seed_5',
      rollNumber: 'BA-2024-105',
      fullName: 'Amara Patel',
      email: 'amara.patel@univ.edu',
      phone: '9543210987',
      gender: 'Female',
      dateOfBirth: '2005-01-19',
      department: 'Business Administration',
      semester: '2nd Year',
      gpa: 3.88,
      status: 'Active',
      address: '45 Wall Street Avenue, Suite 10',
      avatarColor: '#ec4899',
      createdAt: '2025-08-14T08:20:00.000Z'
    },
    {
      id: 'std_seed_6',
      rollNumber: 'BT-2023-018',
      fullName: 'Devon Hayes',
      email: 'devon.hayes@univ.edu',
      phone: '9432109876',
      gender: 'Non-Binary',
      dateOfBirth: '2004-09-03',
      department: 'Biotechnology',
      semester: '3rd Year',
      gpa: 3.68,
      status: 'On Leave',
      address: '21 Bio-Nexus Plaza, Labs Quad',
      avatarColor: '#8b5cf6',
      createdAt: '2025-08-15T13:10:00.000Z'
    },
    {
      id: 'std_seed_7',
      rollNumber: 'CS-2022-099',
      fullName: 'Kavita Sharma',
      email: 'kavita.sharma@univ.edu',
      phone: '9321098765',
      gender: 'Female',
      dateOfBirth: '2003-04-12',
      department: 'Computer Science',
      semester: '4th Year',
      gpa: 3.96,
      status: 'Active',
      address: '14 Turing Loop, Silicon Valley Dorms',
      avatarColor: '#06b6d4',
      createdAt: '2025-08-16T16:00:00.000Z'
    },
    {
      id: 'std_seed_8',
      rollNumber: 'AI-2025-003',
      fullName: 'Lucas Oliveira',
      email: 'lucas.oliveira@univ.edu',
      phone: '9210987654',
      gender: 'Male',
      dateOfBirth: '2005-12-01',
      department: 'Artificial Intelligence',
      semester: '1st Year',
      gpa: 3.32,
      status: 'Active',
      address: '50 Neural Path, Freshman Quad',
      avatarColor: '#f97316',
      createdAt: '2025-08-17T11:05:00.000Z'
    },
    {
      id: 'std_seed_9',
      rollNumber: 'ME-2021-002',
      fullName: 'Zoe Washington',
      email: 'zoe.washington@univ.edu',
      phone: '9109876543',
      gender: 'Female',
      dateOfBirth: '2002-02-28',
      department: 'Mechanical Engineering',
      semester: '4th Year',
      gpa: 3.79,
      status: 'Graduated',
      address: '10 Alumni Blvd, Metro City',
      avatarColor: '#14b8a6',
      createdAt: '2025-08-18T09:30:00.000Z'
    },
    {
      id: 'std_seed_10',
      rollNumber: 'BA-2025-033',
      fullName: 'Julian Thorne',
      email: 'julian.thorne@univ.edu',
      phone: '9098765432',
      gender: 'Male',
      dateOfBirth: '2005-08-14',
      department: 'Business Administration',
      semester: '1st Year',
      gpa: 2.85,
      status: 'Inactive',
      address: '67 Meridian Heights, Apt 4B',
      avatarColor: '#64748b',
      createdAt: '2025-08-19T15:20:00.000Z'
    }
  ];

  // Department colors mapping for visual tags
  const DEPARTMENT_COLORS = {
    'Computer Science': { bg: 'rgba(79, 70, 229, 0.12)', text: '#4f46e5', dot: '#4f46e5' },
    'Artificial Intelligence': { bg: 'rgba(6, 182, 212, 0.12)', text: '#0891b2', dot: '#06b6d4' },
    'Electrical Engineering': { bg: 'rgba(16, 185, 129, 0.12)', text: '#059669', dot: '#10b981' },
    'Mechanical Engineering': { bg: 'rgba(245, 158, 11, 0.12)', text: '#d97706', dot: '#f59e0b' },
    'Business Administration': { bg: 'rgba(236, 72, 153, 0.12)', text: '#db2777', dot: '#ec4899' },
    'Biotechnology': { bg: 'rgba(139, 92, 246, 0.12)', text: '#7c3aed', dot: '#8b5cf6' }
  };

  // ==================== STATE ====================
  const state = {
    students: [],
    searchQuery: '',
    departmentFilter: 'ALL',
    statusFilter: 'ALL',
    semesterFilter: 'ALL',
    sortBy: 'name_asc',
    currentPage: 1,
    rowsPerPage: 10,
    selectedStudentIds: new Set(),
    viewMode: 'table', // 'table' | 'cards'
    editingStudentId: null,
    deleteTargetId: null,
    isBulkDelete: false,
    lastDeleted: null // For undo functionality
  };

  // ==================== DOM ELEMENTS CACHE ====================
  const DOM = {
    // Theme & Navigation
    body: document.body,
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    mobileSidebarToggle: document.getElementById('mobileSidebarToggle'),
    mobileSidebarClose: document.getElementById('mobileSidebarClose'),
    sidebarBackdrop: document.getElementById('sidebarBackdrop'),
    sidebar: document.getElementById('sidebar'),
    navStudentCount: document.getElementById('navStudentCount'),
    navArchitecture: document.getElementById('navArchitecture'),
    viewDashboard: document.getElementById('viewDashboard'),
    viewStudents: document.getElementById('viewStudents'),
    viewArchitecture: document.getElementById('viewArchitecture'),
    navExportBtn: document.getElementById('navExportBtn'),
    navLoadSampleBtn: document.getElementById('navLoadSampleBtn'),
    navResetDataBtn: document.getElementById('navResetDataBtn'),
    sidebarAddStudentBtn: document.getElementById('sidebarAddStudentBtn'),

    // Header & Search
    globalSearchInput: document.getElementById('globalSearchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    openAddModalBtn: document.getElementById('openAddModalBtn'),
    quickAddBtn: document.getElementById('quickAddBtn'),

    // KPI Metrics
    kpiTotalStudents: document.getElementById('kpiTotalStudents'),
    kpiActiveStudents: document.getElementById('kpiActiveStudents'),
    kpiActivePercent: document.getElementById('kpiActivePercent'),
    kpiAvgGpa: document.getElementById('kpiAvgGpa'),
    kpiHonorsCount: document.getElementById('kpiHonorsCount'),
    kpiDeptCount: document.getElementById('kpiDeptCount'),
    kpiTopDept: document.getElementById('kpiTopDept'),

    // Analytics Bar
    deptDistributionBar: document.getElementById('deptDistributionBar'),
    deptLegendGrid: document.getElementById('deptLegendGrid'),
    toggleAnalyticsBtn: document.getElementById('toggleAnalyticsBtn'),
    toggleAnalyticsText: document.getElementById('toggleAnalyticsText'),
    analyticsBody: document.getElementById('analyticsBody'),

    // Filters & Toolbar
    filterDepartment: document.getElementById('filterDepartment'),
    filterStatus: document.getElementById('filterStatus'),
    filterSemester: document.getElementById('filterSemester'),
    sortBy: document.getElementById('sortBy'),
    viewModeTable: document.getElementById('viewModeTable'),
    viewModeGrid: document.getElementById('viewModeGrid'),
    activeFilterChips: document.getElementById('activeFilterChips'),

    // Bulk actions
    bulkActionsBar: document.getElementById('bulkActionsBar'),
    selectedCountBadge: document.getElementById('selectedCountBadge'),
    bulkDeselectBtn: document.getElementById('bulkDeselectBtn'),
    bulkDeleteBtn: document.getElementById('bulkDeleteBtn'),

    // Table & Cards
    tableContainer: document.getElementById('tableContainer'),
    studentsTable: document.getElementById('studentsTable'),
    studentsTableBody: document.getElementById('studentsTableBody'),
    selectAllCheckbox: document.getElementById('selectAllCheckbox'),
    cardsContainer: document.getElementById('cardsContainer'),
    emptyState: document.getElementById('emptyState'),
    emptyDescription: document.getElementById('emptyDescription'),
    emptyResetFilterBtn: document.getElementById('emptyResetFilterBtn'),
    emptyAddStudentBtn: document.getElementById('emptyAddStudentBtn'),

    // Pagination
    showingStart: document.getElementById('showingStart'),
    showingEnd: document.getElementById('showingEnd'),
    showingTotal: document.getElementById('showingTotal'),
    rowsPerPage: document.getElementById('rowsPerPage'),
    paginationButtons: document.getElementById('paginationButtons'),

    // Form Modal
    studentFormModal: document.getElementById('studentFormModal'),
    studentForm: document.getElementById('studentForm'),
    modalTitle: document.getElementById('modalTitle'),
    modalIconBadge: document.getElementById('modalIconBadge'),
    closeFormModalBtn: document.getElementById('closeFormModalBtn'),
    cancelFormModalBtn: document.getElementById('cancelFormModalBtn'),
    saveStudentBtn: document.getElementById('saveStudentBtn'),
    saveStudentBtnText: document.getElementById('saveStudentBtnText'),
    studentIdHidden: document.getElementById('studentIdHidden'),
    formAlertBanner: document.getElementById('formAlertBanner'),

    // Form Fields
    fullName: document.getElementById('fullName'),
    rollNumber: document.getElementById('rollNumber'),
    gender: document.getElementById('gender'),
    dateOfBirth: document.getElementById('dateOfBirth'),
    avatarColor: document.getElementById('avatarColor'),
    department: document.getElementById('department'),
    semester: document.getElementById('semester'),
    gpa: document.getElementById('gpa'),
    status: document.getElementById('status'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    address: document.getElementById('address'),

    // View Modal
    studentViewModal: document.getElementById('studentViewModal'),
    viewModalBody: document.getElementById('viewModalBody'),
    closeViewModalBtn: document.getElementById('closeViewModalBtn'),
    printDossierBtn: document.getElementById('printDossierBtn'),
    editFromViewBtn: document.getElementById('editFromViewBtn'),

    // Delete Modal
    deleteConfirmModal: document.getElementById('deleteConfirmModal'),
    deleteModalTitle: document.getElementById('deleteModalTitle'),
    deleteWarningText: document.getElementById('deleteWarningText'),
    deleteTargetPreview: document.getElementById('deleteTargetPreview'),
    closeDeleteModalBtn: document.getElementById('closeDeleteModalBtn'),
    cancelDeleteModalBtn: document.getElementById('cancelDeleteModalBtn'),
    confirmDeleteActionBtn: document.getElementById('confirmDeleteActionBtn'),

    // Toast
    toastStack: document.getElementById('toastStack')
  };

  // ==================== STORAGE CONTROLLER ====================
  function loadStudents() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          state.students = parsed;
          return;
        }
      }
    } catch (e) {
      console.warn('Failed to parse stored student records, initializing defaults.', e);
    }
    // Initialize default seed data
    state.students = [...INITIAL_SEED_DATA];
    saveStudents();
  }

  function saveStudents() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.students));
      DOM.navStudentCount.textContent = state.students.length;
    } catch (e) {
      console.error('Storage quota exceeded or unavailable', e);
      showToast('Error saving data to local storage', 'error');
    }
  }

  // ==================== THEME CONTROLLER ====================
  function toggleTheme() {
    const currentTheme = DOM.body.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    DOM.body.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} appearance`, 'info');
  }

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      DOM.body.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      DOM.body.setAttribute('data-theme', 'dark');
    } else {
      DOM.body.setAttribute('data-theme', 'light');
    }

    DOM.themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // ==================== HELPERS ====================
  function getInitials(name) {
    if (!name) return '??';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function escapeHTML(str) {
    if (typeof str !== 'string') return str ?? '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getGpaClass(gpa) {
    const num = parseFloat(gpa);
    if (num >= 3.7) return 'gpa-tier-high';
    if (num >= 3.2) return 'gpa-tier-mid';
    return 'gpa-tier-low';
  }

  function getStatusClass(status) {
    switch (status) {
      case 'Active': return 'status-active';
      case 'Inactive': return 'status-inactive';
      case 'On Leave': return 'status-on-leave';
      case 'Graduated': return 'status-graduated';
      default: return 'status-active';
    }
  }

  // ==================== TOAST NOTIFICATION SYSTEM ====================
  function showToast(message, type = 'info', undoAction = null) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconSvg = '';
    if (type === 'success') {
      iconSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    } else if (type === 'error') {
      iconSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    } else {
      iconSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
    }

    let undoBtnHtml = '';
    if (undoAction) {
      undoBtnHtml = `<button class="toast-undo-btn">Undo</button>`;
    }

    toast.innerHTML = `
      <div class="toast-content">
        <span class="toast-icon">${iconSvg}</span>
        <span>${escapeHTML(message)}</span>
      </div>
      ${undoBtnHtml}
    `;

    if (undoAction) {
      const undoBtn = toast.querySelector('.toast-undo-btn');
      undoBtn.addEventListener('click', () => {
        undoAction();
        dismissToast(toast);
      });
    }

    DOM.toastStack.appendChild(toast);

    const timer = setTimeout(() => {
      dismissToast(toast);
    }, 4500);

    function dismissToast(target) {
      clearTimeout(timer);
      target.classList.add('toast-hiding');
      setTimeout(() => {
        if (target.parentElement) target.remove();
      }, 250);
    }
  }

  // ==================== KPI & ANALYTICS CALCULATIONS ====================
  function updateKPIsAndAnalytics() {
    const total = state.students.length;
    DOM.kpiTotalStudents.textContent = total;
    DOM.navStudentCount.textContent = total;

    if (total === 0) {
      DOM.kpiActiveStudents.textContent = '0';
      DOM.kpiActivePercent.textContent = '0%';
      DOM.kpiAvgGpa.textContent = '0.00';
      DOM.kpiHonorsCount.textContent = '0 students in Dean\'s Honors';
      DOM.kpiDeptCount.textContent = '0';
      DOM.kpiTopDept.textContent = 'No records';
      DOM.deptDistributionBar.innerHTML = '';
      DOM.deptLegendGrid.innerHTML = '<div class="dept-legend-item">No enrolled student records.</div>';
      return;
    }

    // Active count
    const activeCount = state.students.filter(s => s.status === 'Active').length;
    const activePercent = Math.round((activeCount / total) * 100);
    DOM.kpiActiveStudents.textContent = activeCount;
    DOM.kpiActivePercent.textContent = `${activePercent}% Active`;

    // Average GPA
    const totalGpa = state.students.reduce((acc, curr) => acc + (parseFloat(curr.gpa) || 0), 0);
    const avgGpa = (totalGpa / total).toFixed(2);
    DOM.kpiAvgGpa.textContent = avgGpa;

    // Dean's Honors (GPA >= 3.75)
    const honorsCount = state.students.filter(s => parseFloat(s.gpa) >= 3.75).length;
    DOM.kpiHonorsCount.textContent = `${honorsCount} student${honorsCount === 1 ? '' : 's'} in Dean's Honors (&ge; 3.75)`;

    // Departments breakdown
    const deptMap = {};
    state.students.forEach(s => {
      const d = s.department || 'Other';
      deptMap[d] = (deptMap[d] || 0) + 1;
    });

    const uniqueDepts = Object.keys(deptMap);
    DOM.kpiDeptCount.textContent = uniqueDepts.length;

    // Find top department
    let topDeptName = '';
    let topDeptCount = -1;
    uniqueDepts.forEach(d => {
      if (deptMap[d] > topDeptCount) {
        topDeptCount = deptMap[d];
        topDeptName = d;
      }
    });
    DOM.kpiTopDept.textContent = topDeptName ? `Lead: ${topDeptName} (${topDeptCount})` : 'N/A';

    // Render Distribution Graphic
    let segmentsHtml = '';
    let legendHtml = '';

    uniqueDepts.forEach(dept => {
      const count = deptMap[dept];
      const pct = ((count / total) * 100).toFixed(1);
      const conf = DEPARTMENT_COLORS[dept] || { bg: 'rgba(99, 102, 241, 0.15)', text: '#6366f1', dot: '#6366f1' };

      segmentsHtml += `
        <div class="progress-segment" style="width: ${pct}%; background-color: ${conf.dot};" title="${dept}: ${count} (${pct}%)"></div>
      `;

      legendHtml += `
        <div class="dept-legend-item">
          <span class="dept-legend-dot" style="background-color: ${conf.dot}"></span>
          <span>${escapeHTML(dept)}:</span>
          <span class="dept-legend-val">${count} (${pct}%)</span>
        </div>
      `;
    });

    DOM.deptDistributionBar.innerHTML = segmentsHtml;
    DOM.deptLegendGrid.innerHTML = legendHtml;
  }

  // ==================== FILTER, SEARCH & SORT LOGIC ====================
  function getFilteredAndSortedStudents() {
    let result = [...state.students];

    // Global Search
    const q = state.searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(s => {
        const nameMatch = (s.fullName || '').toLowerCase().includes(q);
        const rollMatch = (s.rollNumber || '').toLowerCase().includes(q);
        const emailMatch = (s.email || '').toLowerCase().includes(q);
        const deptMatch = (s.department || '').toLowerCase().includes(q);
        const phoneMatch = (s.phone || '').includes(q);
        return nameMatch || rollMatch || emailMatch || deptMatch || phoneMatch;
      });
    }

    // Department Filter
    if (state.departmentFilter !== 'ALL') {
      result = result.filter(s => s.department === state.departmentFilter);
    }

    // Status Filter
    if (state.statusFilter !== 'ALL') {
      result = result.filter(s => s.status === state.statusFilter);
    }

    // Semester / Year Filter
    if (state.semesterFilter !== 'ALL') {
      result = result.filter(s => s.semester === state.semesterFilter);
    }

    // Sorting
    result.sort((a, b) => {
      switch (state.sortBy) {
        case 'name_asc':
          return (a.fullName || '').localeCompare(b.fullName || '');
        case 'name_desc':
          return (b.fullName || '').localeCompare(a.fullName || '');
        case 'roll_asc':
          return (a.rollNumber || '').localeCompare(b.rollNumber || '', undefined, { numeric: true });
        case 'gpa_desc':
          return (parseFloat(b.gpa) || 0) - (parseFloat(a.gpa) || 0);
        case 'gpa_asc':
          return (parseFloat(a.gpa) || 0) - (parseFloat(b.gpa) || 0);
        case 'recent':
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        default:
          return 0;
      }
    });

    return result;
  }

  // Render Filter Chips
  function renderActiveFilterChips() {
    const chips = [];

    if (state.searchQuery) {
      chips.push({
        label: `Search: "${state.searchQuery}"`,
        onRemove: () => {
          state.searchQuery = '';
          DOM.globalSearchInput.value = '';
          DOM.clearSearchBtn.style.display = 'none';
          render();
        }
      });
    }

    if (state.departmentFilter !== 'ALL') {
      chips.push({
        label: `Dept: ${state.departmentFilter}`,
        onRemove: () => {
          state.departmentFilter = 'ALL';
          DOM.filterDepartment.value = 'ALL';
          render();
        }
      });
    }

    if (state.statusFilter !== 'ALL') {
      chips.push({
        label: `Status: ${state.statusFilter}`,
        onRemove: () => {
          state.statusFilter = 'ALL';
          DOM.filterStatus.value = 'ALL';
          render();
        }
      });
    }

    if (state.semesterFilter !== 'ALL') {
      chips.push({
        label: `Year: ${state.semesterFilter}`,
        onRemove: () => {
          state.semesterFilter = 'ALL';
          DOM.filterSemester.value = 'ALL';
          render();
        }
      });
    }

    DOM.activeFilterChips.innerHTML = chips.map((c, i) => `
      <div class="filter-chip">
        <span>${escapeHTML(c.label)}</span>
        <button class="filter-chip-remove" data-chip-idx="${i}" aria-label="Remove filter">&times;</button>
      </div>
    `).join('');

    chips.forEach((c, idx) => {
      const btn = DOM.activeFilterChips.querySelector(`[data-chip-idx="${idx}"]`);
      if (btn) btn.addEventListener('click', c.onRemove);
    });
  }

  // ==================== RENDERING (TABLE & CARDS) ====================
  function render() {
    updateKPIsAndAnalytics();
    renderActiveFilterChips();

    const filtered = getFilteredAndSortedStudents();
    const totalRecords = filtered.length;

    // Bounds check for pagination
    const maxPage = Math.max(1, Math.ceil(totalRecords / state.rowsPerPage));
    if (state.currentPage > maxPage) {
      state.currentPage = maxPage;
    }

    const startIndex = (state.currentPage - 1) * state.rowsPerPage;
    const pageRecords = filtered.slice(startIndex, startIndex + state.rowsPerPage);

    // Update pagination stats
    DOM.showingStart.textContent = totalRecords === 0 ? '0' : startIndex + 1;
    DOM.showingEnd.textContent = Math.min(startIndex + state.rowsPerPage, totalRecords);
    DOM.showingTotal.textContent = totalRecords;

    // Render pagination controls
    renderPagination(maxPage);

    // Handle Empty State
    if (totalRecords === 0) {
      DOM.studentsTable.style.display = 'none';
      DOM.cardsContainer.style.display = 'none';
      DOM.emptyState.style.display = 'flex';

      if (state.searchQuery || state.departmentFilter !== 'ALL' || state.statusFilter !== 'ALL' || state.semesterFilter !== 'ALL') {
        DOM.emptyDescription.textContent = 'No students match your active filters and search query.';
        DOM.emptyResetFilterBtn.style.display = 'inline-flex';
      } else {
        DOM.emptyDescription.textContent = 'There are no student records currently enrolled. Add a student or load demo records.';
        DOM.emptyResetFilterBtn.style.display = 'none';
      }
      updateBulkActionBar();
      return;
    }

    DOM.emptyState.style.display = 'none';

    if (state.viewMode === 'table') {
      DOM.studentsTable.style.display = 'table';
      DOM.cardsContainer.style.display = 'none';
      renderTableView(pageRecords);
    } else {
      DOM.studentsTable.style.display = 'none';
      DOM.cardsContainer.style.display = 'grid';
      renderCardsView(pageRecords);
    }

    updateBulkActionBar();
  }

  // Table View Renderer
  function renderTableView(records) {
    DOM.studentsTableBody.innerHTML = records.map(student => {
      const isSelected = state.selectedStudentIds.has(student.id);
      const initials = getInitials(student.fullName);
      const deptConf = DEPARTMENT_COLORS[student.department] || { bg: '#eef2ff', text: '#4f46e5' };
      const gpaClass = getGpaClass(student.gpa);
      const statusClass = getStatusClass(student.status);

      return `
        <tr class="table-row ${isSelected ? 'row-selected' : ''}" data-id="${student.id}">
          <td class="td-checkbox">
            <input type="checkbox" class="student-row-checkbox" data-id="${student.id}" ${isSelected ? 'checked' : ''} aria-label="Select student ${escapeHTML(student.fullName)}">
          </td>
          <td>
            <div class="student-profile-cell">
              <div class="student-avatar" style="background-color: ${student.avatarColor || '#4f46e5'};">
                ${initials}
              </div>
              <div class="student-identity">
                <span class="student-name-link" data-action="view" data-id="${student.id}">${escapeHTML(student.fullName)}</span>
                <span class="student-subtext">${escapeHTML(student.gender || 'Student')} &bull; ${escapeHTML(student.dateOfBirth || '')}</span>
              </div>
            </div>
          </td>
          <td>
            <span class="student-id-tag">${escapeHTML(student.rollNumber)}</span>
          </td>
          <td>
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <span class="dept-badge" style="background-color: ${deptConf.bg}; color: ${deptConf.text};">${escapeHTML(student.department)}</span>
              <span style="font-size: 0.75rem; color: var(--text-muted);">${escapeHTML(student.semester)}</span>
            </div>
          </td>
          <td>
            <div class="gpa-pill ${gpaClass}">
              <span>${parseFloat(student.gpa).toFixed(2)}</span>
              <span style="font-size: 0.7rem; font-weight: normal; opacity: 0.8;">/ 4.00</span>
            </div>
          </td>
          <td>
            <span class="status-pill ${statusClass}">
              <span class="status-dot"></span>
              <span>${escapeHTML(student.status)}</span>
            </span>
          </td>
          <td>
            <div class="contact-cell">
              <span>${escapeHTML(student.email)}</span>
              <span class="contact-phone">${escapeHTML(student.phone)}</span>
            </div>
          </td>
          <td>
            <div class="row-actions">
              <button class="action-icon-btn" data-action="view" data-id="${student.id}" title="View Complete Dossier">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </button>
              <button class="action-icon-btn" data-action="edit" data-id="${student.id}" title="Edit Student Record">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              </button>
              <button class="action-icon-btn btn-delete" data-action="delete" data-id="${student.id}" title="Delete Record">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    // Update select-all checkbox state
    const allPageSelected = records.length > 0 && records.every(r => state.selectedStudentIds.has(r.id));
    DOM.selectAllCheckbox.checked = allPageSelected;
  }

  // Cards / Grid View Renderer
  function renderCardsView(records) {
    DOM.cardsContainer.innerHTML = records.map(student => {
      const isSelected = state.selectedStudentIds.has(student.id);
      const initials = getInitials(student.fullName);
      const deptConf = DEPARTMENT_COLORS[student.department] || { bg: '#eef2ff', text: '#4f46e5' };
      const gpaClass = getGpaClass(student.gpa);
      const statusClass = getStatusClass(student.status);

      return `
        <div class="student-card ${isSelected ? 'card-selected' : ''}" data-id="${student.id}">
          <div class="card-top">
            <div class="card-avatar-box">
              <div class="card-avatar" style="background-color: ${student.avatarColor || '#4f46e5'};">
                ${initials}
              </div>
              <div>
                <h4 class="card-name" data-action="view" data-id="${student.id}">${escapeHTML(student.fullName)}</h4>
                <span class="student-id-tag" style="margin-top: 4px;">${escapeHTML(student.rollNumber)}</span>
              </div>
            </div>
            <span class="status-pill ${statusClass}">
              <span class="status-dot"></span>
              <span>${escapeHTML(student.status)}</span>
            </span>
          </div>

          <div class="card-details-list">
            <div class="card-detail-row">
              <span class="card-detail-label">Department</span>
              <span class="dept-badge" style="background-color: ${deptConf.bg}; color: ${deptConf.text};">${escapeHTML(student.department)}</span>
            </div>
            <div class="card-detail-row">
              <span class="card-detail-label">Year / Sem</span>
              <span class="card-detail-value">${escapeHTML(student.semester)}</span>
            </div>
            <div class="card-detail-row">
              <span class="card-detail-label">Academic GPA</span>
              <span class="gpa-pill ${gpaClass}">${parseFloat(student.gpa).toFixed(2)} / 4.00</span>
            </div>
            <div class="card-detail-row">
              <span class="card-detail-label">Email</span>
              <span class="card-detail-value" style="font-size: 0.75rem;">${escapeHTML(student.email)}</span>
            </div>
            <div class="card-detail-row">
              <span class="card-detail-label">Phone</span>
              <span class="card-detail-value" style="font-family: var(--font-mono); font-size: 0.75rem;">${escapeHTML(student.phone)}</span>
            </div>
          </div>

          <div class="card-footer">
            <label style="display: flex; align-items: center; gap: 6px; font-size: 0.78rem; cursor: pointer;">
              <input type="checkbox" class="student-row-checkbox" data-id="${student.id}" ${isSelected ? 'checked' : ''}>
              <span>Select</span>
            </label>
            <div class="card-actions-group">
              <button class="btn btn-sm btn-outline" data-action="view" data-id="${student.id}">
                <span>Profile</span>
              </button>
              <button class="btn btn-sm btn-ghost" data-action="edit" data-id="${student.id}" title="Edit Record">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
              </button>
              <button class="btn btn-sm btn-ghost text-danger" data-action="delete" data-id="${student.id}" title="Delete Record">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Pagination Renderer
  function renderPagination(maxPage) {
    if (maxPage <= 1) {
      DOM.paginationButtons.innerHTML = '';
      return;
    }

    let buttonsHtml = `
      <button class="page-btn" data-page="${state.currentPage - 1}" ${state.currentPage === 1 ? 'disabled' : ''} aria-label="Previous page">
        &laquo;
      </button>
    `;

    for (let p = 1; p <= maxPage; p++) {
      if (p === 1 || p === maxPage || (p >= state.currentPage - 1 && p <= state.currentPage + 1)) {
        buttonsHtml += `
          <button class="page-btn ${p === state.currentPage ? 'active' : ''}" data-page="${p}">${p}</button>
        `;
      } else if (p === state.currentPage - 2 || p === state.currentPage + 2) {
        buttonsHtml += `<span style="padding: 0 4px; color: var(--text-dim);">&hellip;</span>`;
      }
    }

    buttonsHtml += `
      <button class="page-btn" data-page="${state.currentPage + 1}" ${state.currentPage === maxPage ? 'disabled' : ''} aria-label="Next page">
        &raquo;
      </button>
    `;

    DOM.paginationButtons.innerHTML = buttonsHtml;
  }

  // Bulk Action Bar Handler
  function updateBulkActionBar() {
    const count = state.selectedStudentIds.size;
    if (count > 0) {
      DOM.bulkActionsBar.style.display = 'flex';
      DOM.selectedCountBadge.textContent = count;
    } else {
      DOM.bulkActionsBar.style.display = 'none';
    }
  }

  // ==================== FORM VALIDATION & MODAL CONTROLLER ====================
  function clearFormErrors() {
    DOM.formAlertBanner.style.display = 'none';
    DOM.formAlertBanner.textContent = '';
    const errorSpans = DOM.studentForm.querySelectorAll('.field-error');
    errorSpans.forEach(span => { span.textContent = ''; });
    const inputs = DOM.studentForm.querySelectorAll('.input-error');
    inputs.forEach(input => { input.classList.remove('input-error'); });
  }

  function setFieldError(fieldId, errorMsg) {
    const input = document.getElementById(fieldId);
    if (input) input.classList.add('input-error');

    // Error text target
    const errorMap = {
      fullName: 'nameError',
      rollNumber: 'rollError',
      gender: 'genderError',
      dateOfBirth: 'dobError',
      department: 'deptError',
      semester: 'semesterError',
      gpa: 'gpaError',
      status: 'statusError',
      email: 'emailError',
      phone: 'phoneError'
    };

    const targetId = errorMap[fieldId];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) el.textContent = errorMsg;
    }
  }

  function validateStudentForm() {
    clearFormErrors();
    let isValid = true;

    const name = DOM.fullName.value.trim();
    const roll = DOM.rollNumber.value.trim();
    const gender = DOM.gender.value;
    const dob = DOM.dateOfBirth.value;
    const dept = DOM.department.value;
    const sem = DOM.semester.value;
    const gpaVal = DOM.gpa.value.trim();
    const status = DOM.status.value;
    const email = DOM.email.value.trim();
    const phone = DOM.phone.value.trim();

    // 1. Full Name
    if (!name) {
      setFieldError('fullName', 'Full name is required.');
      isValid = false;
    } else if (name.length < 2) {
      setFieldError('fullName', 'Name must be at least 2 characters long.');
      isValid = false;
    }

    // 2. Student Roll Number
    if (!roll) {
      setFieldError('rollNumber', 'Student Roll ID is required.');
      isValid = false;
    } else {
      // Check Uniqueness
      const existing = state.students.find(s => s.rollNumber.toLowerCase() === roll.toLowerCase() && s.id !== state.editingStudentId);
      if (existing) {
        setFieldError('rollNumber', `Roll Number "${roll}" is already assigned to ${existing.fullName}.`);
        isValid = false;
      }
    }

    // 3. Gender
    if (!gender) {
      setFieldError('gender', 'Please select a gender option.');
      isValid = false;
    }

    // 4. Date of Birth
    if (!dob) {
      setFieldError('dateOfBirth', 'Date of birth is required.');
      isValid = false;
    } else {
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (age < 15 || age > 75) {
        setFieldError('dateOfBirth', 'Student age must be between 15 and 75 years old.');
        isValid = false;
      }
    }

    // 5. Department
    if (!dept) {
      setFieldError('department', 'Academic department is required.');
      isValid = false;
    }

    // 6. Semester / Year
    if (!sem) {
      setFieldError('semester', 'Academic year / semester is required.');
      isValid = false;
    }

    // 7. GPA / CGPA
    if (!gpaVal) {
      setFieldError('gpa', 'GPA is required.');
      isValid = false;
    } else {
      const numGpa = parseFloat(gpaVal);
      if (isNaN(numGpa) || numGpa < 0 || numGpa > 4.00) {
        setFieldError('gpa', 'GPA must be between 0.00 and 4.00.');
        isValid = false;
      }
    }

    // 8. Status
    if (!status) {
      setFieldError('status', 'Enrollment status is required.');
      isValid = false;
    }

    // 9. Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setFieldError('email', 'Email address is required.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setFieldError('email', 'Enter a valid email address (e.g. name@domain.com).');
      isValid = false;
    }

    // 10. Phone
    const cleanPhone = phone.replace(/[\s\-()]/g, '');
    if (!phone) {
      setFieldError('phone', 'Phone number is required.');
      isValid = false;
    } else if (!/^\+?\d{10,15}$/.test(cleanPhone)) {
      setFieldError('phone', 'Phone number must contain 10 to 15 digits.');
      isValid = false;
    }

    if (!isValid) {
      DOM.formAlertBanner.className = 'form-alert form-alert-error';
      DOM.formAlertBanner.textContent = 'Please correct the highlighted fields before submitting.';
      DOM.formAlertBanner.style.display = 'block';
    }

    return isValid;
  }

  function openStudentModal(studentId = null) {
    clearFormErrors();
    state.editingStudentId = studentId;

    if (studentId) {
      // Edit Mode
      const student = state.students.find(s => s.id === studentId);
      if (!student) return;

      DOM.modalTitle.textContent = 'Update Student Record';
      DOM.saveStudentBtnText.textContent = 'Save Changes';
      DOM.studentIdHidden.value = student.id;

      DOM.fullName.value = student.fullName || '';
      DOM.rollNumber.value = student.rollNumber || '';
      DOM.gender.value = student.gender || '';
      DOM.dateOfBirth.value = student.dateOfBirth || '';
      DOM.avatarColor.value = student.avatarColor || '#4f46e5';
      DOM.department.value = student.department || '';
      DOM.semester.value = student.semester || '';
      DOM.gpa.value = student.gpa !== undefined ? student.gpa : '';
      DOM.status.value = student.status || 'Active';
      DOM.email.value = student.email || '';
      DOM.phone.value = student.phone || '';
      DOM.address.value = student.address || '';
    } else {
      // Create Mode
      DOM.modalTitle.textContent = 'Register New Student';
      DOM.saveStudentBtnText.textContent = 'Save Record';
      DOM.studentForm.reset();
      DOM.studentIdHidden.value = '';
      DOM.status.value = 'Active';

      // Pick a random vibrant avatar color
      const palette = ['#4f46e5', '#0284c7', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4'];
      DOM.avatarColor.value = palette[Math.floor(Math.random() * palette.length)];

      // Auto-suggest next roll number prefix based on year
      const currentYear = new Date().getFullYear();
      const count = state.students.length + 1;
      DOM.rollNumber.placeholder = `CS-${currentYear}-${String(count).padStart(3, '0')}`;
    }

    DOM.studentFormModal.style.display = 'flex';
    DOM.fullName.focus();
  }

  function closeStudentModal() {
    DOM.studentFormModal.style.display = 'none';
    clearFormErrors();
    state.editingStudentId = null;
  }

  // Handle Form Submission
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!validateStudentForm()) {
      return;
    }

    const payload = {
      fullName: DOM.fullName.value.trim(),
      rollNumber: DOM.rollNumber.value.trim().toUpperCase(),
      gender: DOM.gender.value,
      dateOfBirth: DOM.dateOfBirth.value,
      avatarColor: DOM.avatarColor.value,
      department: DOM.department.value,
      semester: DOM.semester.value,
      gpa: parseFloat(DOM.gpa.value),
      status: DOM.status.value,
      email: DOM.email.value.trim().toLowerCase(),
      phone: DOM.phone.value.trim(),
      address: DOM.address.value.trim()
    };

    if (state.editingStudentId) {
      // Update existing record
      const index = state.students.findIndex(s => s.id === state.editingStudentId);
      if (index !== -1) {
        state.students[index] = {
          ...state.students[index],
          ...payload,
          updatedAt: new Date().toISOString()
        };
        saveStudents();
        render();
        showToast(`Record for ${payload.fullName} updated successfully!`, 'success');
      }
    } else {
      // Create new record
      const newStudent = {
        id: 'std_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        ...payload,
        createdAt: new Date().toISOString()
      };
      state.students.unshift(newStudent);
      saveStudents();
      render();
      showToast(`Student ${payload.fullName} registered successfully!`, 'success');
    }

    closeStudentModal();
  }

  // ==================== VIEW STUDENT DOSSIER MODAL ====================
  function openViewModal(studentId) {
    const student = state.students.find(s => s.id === studentId);
    if (!student) return;

    const initials = getInitials(student.fullName);
    const deptConf = DEPARTMENT_COLORS[student.department] || { bg: '#eef2ff', text: '#4f46e5' };
    const gpaClass = getGpaClass(student.gpa);
    const statusClass = getStatusClass(student.status);

    // Realistic attendance simulator based on GPA
    const simulatedAttendance = Math.min(99, Math.max(72, Math.round(parseFloat(student.gpa) * 23.5)));

    // Academic Standing Honorific
    let standingTitle = 'Good Academic Standing';
    if (student.gpa >= 3.8) standingTitle = 'Summa Cum Laude (Dean\'s Top Honors)';
    else if (student.gpa >= 3.5) standingTitle = 'Magna Cum Laude (Honors List)';
    else if (student.gpa < 3.0) standingTitle = 'Academic Review Required';

    DOM.viewModalBody.innerHTML = `
      <div class="dossier-header-card">
        <div class="dossier-avatar" style="background-color: ${student.avatarColor || '#4f46e5'};">
          ${initials}
        </div>
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 class="dossier-name">${escapeHTML(student.fullName)}</h3>
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span class="student-id-tag">${escapeHTML(student.rollNumber)}</span>
            <span class="status-pill ${statusClass}">
              <span class="status-dot"></span>
              <span>${escapeHTML(student.status)}</span>
            </span>
            <span class="dept-badge" style="background-color: ${deptConf.bg}; color: ${deptConf.text};">${escapeHTML(student.department)}</span>
          </div>
        </div>
      </div>

      <div class="dossier-info-grid">
        <div class="dossier-metric-box">
          <span class="dossier-metric-label">Academic GPA / CGPA</span>
          <div style="display: flex; align-items: baseline; gap: 8px;">
            <span class="gpa-pill ${gpaClass}" style="font-size: 1.1rem;">${parseFloat(student.gpa).toFixed(2)}</span>
            <span style="font-size: 0.76rem; color: var(--text-muted);">${standingTitle}</span>
          </div>
        </div>

        <div class="dossier-metric-box">
          <span class="dossier-metric-label">Curriculum Standing</span>
          <span class="dossier-metric-val">${escapeHTML(student.semester)}</span>
          <span style="font-size: 0.72rem; color: var(--text-muted);">Enrolled Batch 2026-27</span>
        </div>

        <div class="dossier-metric-box">
          <span class="dossier-metric-label">Term Attendance Rate</span>
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <span class="dossier-metric-val">${simulatedAttendance}%</span>
            <span style="font-size: 0.72rem; color: var(--success-text); font-weight: 600;">Optimal</span>
          </div>
          <div class="dossier-attendance-bar">
            <div class="dossier-attendance-fill" style="width: ${simulatedAttendance}%;"></div>
          </div>
        </div>

        <div class="dossier-metric-box">
          <span class="dossier-metric-label">Demographics</span>
          <span class="dossier-metric-val">${escapeHTML(student.gender || 'Not specified')}</span>
          <span style="font-size: 0.72rem; color: var(--text-muted);">Born: ${escapeHTML(student.dateOfBirth || 'N/A')}</span>
        </div>
      </div>

      <div class="dossier-metric-box" style="margin-top: -6px;">
        <span class="dossier-metric-label">Direct Contact Channels</span>
        <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 4px; font-size: 0.85rem;">
          <div>
            <strong>Email:</strong> 
            <a href="mailto:${escapeHTML(student.email)}" style="color: var(--primary); text-decoration: underline;">${escapeHTML(student.email)}</a>
          </div>
          <div>
            <strong>Phone:</strong> 
            <a href="tel:${escapeHTML(student.phone)}" style="font-family: var(--font-mono); color: var(--text-main);">${escapeHTML(student.phone)}</a>
          </div>
          <div>
            <strong>Address:</strong> 
            <span style="color: var(--text-muted);">${escapeHTML(student.address || 'Campus Residence Quad, Unspecified')}</span>
          </div>
        </div>
      </div>
    `;

    DOM.editFromViewBtn.onclick = () => {
      closeViewModal();
      openStudentModal(studentId);
    };

    DOM.studentViewModal.style.display = 'flex';
  }

  function closeViewModal() {
    DOM.studentViewModal.style.display = 'none';
  }

  // ==================== DELETE MODAL & UNDO CONTROLLER ====================
  function openDeleteModal(studentId, isBulk = false) {
    state.deleteTargetId = studentId;
    state.isBulkDelete = isBulk;

    if (isBulk) {
      const count = state.selectedStudentIds.size;
      DOM.deleteModalTitle.textContent = `Delete ${count} Selected Records`;
      DOM.deleteWarningText.textContent = `Are you sure you want to permanently delete these ${count} selected student records from the database?`;
      DOM.deleteTargetPreview.innerHTML = `<span><strong>${count}</strong> student profiles queued for batch removal.</span>`;
    } else {
      const student = state.students.find(s => s.id === studentId);
      if (!student) return;

      DOM.deleteModalTitle.textContent = 'Confirm Record Deletion';
      DOM.deleteWarningText.textContent = 'Are you sure you want to delete this student record? This will revoke all course registrations.';
      DOM.deleteTargetPreview.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span><strong>${escapeHTML(student.fullName)}</strong> (${escapeHTML(student.rollNumber)})</span>
          <span class="dept-badge" style="background: var(--bg-hover); font-size: 0.72rem;">${escapeHTML(student.department)}</span>
        </div>
      `;
    }

    DOM.deleteConfirmModal.style.display = 'flex';
  }

  function closeDeleteModal() {
    DOM.deleteConfirmModal.style.display = 'none';
    state.deleteTargetId = null;
    state.isBulkDelete = false;
  }

  function executeDelete() {
    if (state.isBulkDelete) {
      // Bulk delete
      const idsToDelete = new Set(state.selectedStudentIds);
      const deletedStudents = state.students.filter(s => idsToDelete.has(s.id));
      
      state.students = state.students.filter(s => !idsToDelete.has(s.id));
      state.selectedStudentIds.clear();
      saveStudents();
      render();
      closeDeleteModal();

      // Enable undo
      showToast(`Deleted ${deletedStudents.length} student records.`, 'info', () => {
        state.students.unshift(...deletedStudents);
        saveStudents();
        render();
        showToast('Batch deletion undone successfully!', 'success');
      });
    } else if (state.deleteTargetId) {
      // Single delete
      const targetIndex = state.students.findIndex(s => s.id === state.deleteTargetId);
      if (targetIndex !== -1) {
        const removed = state.students.splice(targetIndex, 1)[0];
        state.selectedStudentIds.delete(removed.id);
        saveStudents();
        render();
        closeDeleteModal();

        // Enable undo
        showToast(`Record for ${removed.fullName} deleted.`, 'info', () => {
          state.students.splice(targetIndex, 0, removed);
          saveStudents();
          render();
          showToast(`Restored record for ${removed.fullName}!`, 'success');
        });
      }
    }
  }

  // ==================== CSV EXPORT CONTROLLER ====================
  function exportStudentsCSV() {
    const records = getFilteredAndSortedStudents();
    if (records.length === 0) {
      showToast('No student records available to export', 'error');
      return;
    }

    const headers = [
      'Roll Number',
      'Full Name',
      'Email',
      'Phone',
      'Gender',
      'Date of Birth',
      'Department',
      'Year/Semester',
      'GPA',
      'Enrollment Status',
      'Address',
      'Created At'
    ];

    const csvRows = [headers.join(',')];

    records.forEach(s => {
      const row = [
        `"${(s.rollNumber || '').replace(/"/g, '""')}"`,
        `"${(s.fullName || '').replace(/"/g, '""')}"`,
        `"${(s.email || '').replace(/"/g, '""')}"`,
        `"${(s.phone || '').replace(/"/g, '""')}"`,
        `"${(s.gender || '').replace(/"/g, '""')}"`,
        `"${(s.dateOfBirth || '').replace(/"/g, '""')}"`,
        `"${(s.department || '').replace(/"/g, '""')}"`,
        `"${(s.semester || '').replace(/"/g, '""')}"`,
        s.gpa !== undefined ? parseFloat(s.gpa).toFixed(2) : '0.00',
        `"${(s.status || '').replace(/"/g, '""')}"`,
        `"${(s.address || '').replace(/"/g, '""')}"`,
        `"${s.createdAt || ''}"`
      ];
      csvRows.push(row.join(','));
    });

    const csvBlob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const downloadUrl = URL.createObjectURL(csvBlob);
    const link = document.createElement('a');
    const timestamp = new Date().toISOString().slice(0, 10);
    link.href = downloadUrl;
    link.download = `EduPulse_Student_Roster_${timestamp}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl);

    showToast(`Exported ${records.length} records to CSV successfully!`, 'success');
  }

  // ==================== EVENT LISTENERS SETUP ====================
  function attachEventListeners() {

    // ==================== SPA CLIENT-SIDE ROUTER ====================
    function handleRoute() {
      const hash = window.location.hash.slice(1) || 'dashboard';
      const validRoutes = ['dashboard', 'students', 'architecture'];
      const activeRoute = validRoutes.includes(hash) ? hash : 'dashboard';

      if (DOM.navDashboard) DOM.navDashboard.classList.toggle('active', activeRoute === 'dashboard');
      if (DOM.navStudents) DOM.navStudents.classList.toggle('active', activeRoute === 'students');
      if (DOM.navArchitecture) DOM.navArchitecture.classList.toggle('active', activeRoute === 'architecture');

      if (DOM.viewDashboard && DOM.viewStudents && DOM.viewArchitecture) {
        if (activeRoute === 'dashboard') {
          DOM.viewDashboard.style.display = 'block';
          DOM.viewStudents.style.display = 'block';
          DOM.viewArchitecture.style.display = 'none';
        } else if (activeRoute === 'students') {
          DOM.viewDashboard.style.display = 'none';
          DOM.viewStudents.style.display = 'block';
          DOM.viewArchitecture.style.display = 'none';
        } else if (activeRoute === 'architecture') {
          DOM.viewDashboard.style.display = 'none';
          DOM.viewStudents.style.display = 'none';
          DOM.viewArchitecture.style.display = 'block';
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('hashchange', handleRoute);
    handleRoute();

    // Mobile Sidebar toggle
    DOM.mobileSidebarToggle.addEventListener('click', () => {
      DOM.sidebar.classList.add('mobile-open');
      DOM.sidebarBackdrop.classList.add('active');
    });

    const closeSidebarMobile = () => {
      DOM.sidebar.classList.remove('mobile-open');
      DOM.sidebarBackdrop.classList.remove('active');
    };

    DOM.mobileSidebarClose.addEventListener('click', closeSidebarMobile);
    DOM.sidebarBackdrop.addEventListener('click', closeSidebarMobile);

    // Global Search
    DOM.globalSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      state.currentPage = 1;
      DOM.clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
      render();
    });

    DOM.clearSearchBtn.addEventListener('click', () => {
      state.searchQuery = '';
      DOM.globalSearchInput.value = '';
      DOM.clearSearchBtn.style.display = 'none';
      DOM.globalSearchInput.focus();
      render();
    });

    // Keyboard shortcut '/' to search
    window.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== DOM.globalSearchInput && !['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        e.preventDefault();
        DOM.globalSearchInput.focus();
      }
      if (e.key === 'Escape') {
        closeStudentModal();
        closeViewModal();
        closeDeleteModal();
      }
    });

    // Add Student Triggers
    DOM.openAddModalBtn.addEventListener('click', () => openStudentModal());
    DOM.quickAddBtn.addEventListener('click', () => openStudentModal());
    DOM.sidebarAddStudentBtn.addEventListener('click', () => {
      closeSidebarMobile();
      openStudentModal();
    });
    DOM.emptyAddStudentBtn.addEventListener('click', () => openStudentModal());

    // Filter controls
    DOM.filterDepartment.addEventListener('change', (e) => {
      state.departmentFilter = e.target.value;
      state.currentPage = 1;
      render();
    });

    DOM.filterStatus.addEventListener('change', (e) => {
      state.statusFilter = e.target.value;
      state.currentPage = 1;
      render();
    });

    DOM.filterSemester.addEventListener('change', (e) => {
      state.semesterFilter = e.target.value;
      state.currentPage = 1;
      render();
    });

    DOM.sortBy.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      render();
    });

    // Reset Filters from Empty state
    DOM.emptyResetFilterBtn.addEventListener('click', () => {
      state.searchQuery = '';
      state.departmentFilter = 'ALL';
      state.statusFilter = 'ALL';
      state.semesterFilter = 'ALL';
      DOM.globalSearchInput.value = '';
      DOM.clearSearchBtn.style.display = 'none';
      DOM.filterDepartment.value = 'ALL';
      DOM.filterStatus.value = 'ALL';
      DOM.filterSemester.value = 'ALL';
      render();
    });

    // View Mode Toggle
    DOM.viewModeTable.addEventListener('click', () => {
      state.viewMode = 'table';
      DOM.viewModeTable.classList.add('active');
      DOM.viewModeGrid.classList.remove('active');
      localStorage.setItem(VIEW_KEY, 'table');
      render();
    });

    DOM.viewModeGrid.addEventListener('click', () => {
      state.viewMode = 'cards';
      DOM.viewModeGrid.classList.add('active');
      DOM.viewModeTable.classList.remove('active');
      localStorage.setItem(VIEW_KEY, 'cards');
      render();
    });

    // Rows Per Page
    DOM.rowsPerPage.addEventListener('change', (e) => {
      state.rowsPerPage = parseInt(e.target.value, 10);
      state.currentPage = 1;
      render();
    });

    // Table Header Sorting
    const sortableHeaders = document.querySelectorAll('.th-sortable');
    sortableHeaders.forEach(th => {
      th.addEventListener('click', () => {
        const type = th.getAttribute('data-sort');
        if (type === 'name') {
          state.sortBy = state.sortBy === 'name_asc' ? 'name_desc' : 'name_asc';
        } else if (type === 'roll') {
          state.sortBy = 'roll_asc';
        } else if (type === 'gpa') {
          state.sortBy = state.sortBy === 'gpa_desc' ? 'gpa_asc' : 'gpa_desc';
        }
        DOM.sortBy.value = state.sortBy;
        render();
      });
    });

    // Pagination Delegated Clicks
    DOM.paginationButtons.addEventListener('click', (e) => {
      const btn = e.target.closest('.page-btn');
      if (btn && !btn.disabled) {
        state.currentPage = parseInt(btn.getAttribute('data-page'), 10);
        render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // Delegated actions for Table Body and Cards Container
    const handleContainerAction = (e) => {
      // Checkbox click
      const checkbox = e.target.closest('.student-row-checkbox');
      if (checkbox) {
        const id = checkbox.getAttribute('data-id');
        if (checkbox.checked) {
          state.selectedStudentIds.add(id);
        } else {
          state.selectedStudentIds.delete(id);
        }
        render();
        return;
      }

      // Action buttons
      const actionEl = e.target.closest('[data-action]');
      if (!actionEl) return;

      const action = actionEl.getAttribute('data-action');
      const id = actionEl.getAttribute('data-id');

      if (action === 'view') {
        openViewModal(id);
      } else if (action === 'edit') {
        openStudentModal(id);
      } else if (action === 'delete') {
        openDeleteModal(id, false);
      }
    };

    DOM.studentsTableBody.addEventListener('click', handleContainerAction);
    DOM.cardsContainer.addEventListener('click', handleContainerAction);

    // Select All Checkbox
    DOM.selectAllCheckbox.addEventListener('change', (e) => {
      const filtered = getFilteredAndSortedStudents();
      const startIndex = (state.currentPage - 1) * state.rowsPerPage;
      const pageRecords = filtered.slice(startIndex, startIndex + state.rowsPerPage);

      if (e.target.checked) {
        pageRecords.forEach(s => state.selectedStudentIds.add(s.id));
      } else {
        pageRecords.forEach(s => state.selectedStudentIds.delete(s.id));
      }
      render();
    });

    // Bulk action buttons
    DOM.bulkDeselectBtn.addEventListener('click', () => {
      state.selectedStudentIds.clear();
      render();
    });

    DOM.bulkDeleteBtn.addEventListener('click', () => {
      openDeleteModal(null, true);
    });

    // Form Modal Controls
    DOM.studentForm.addEventListener('submit', handleFormSubmit);
    DOM.closeFormModalBtn.addEventListener('click', closeStudentModal);
    DOM.cancelFormModalBtn.addEventListener('click', closeStudentModal);

    // View Modal Controls
    DOM.closeViewModalBtn.addEventListener('click', closeViewModal);
    DOM.printDossierBtn.addEventListener('click', () => {
      window.print();
    });

    // Delete Modal Controls
    DOM.closeDeleteModalBtn.addEventListener('click', closeDeleteModal);
    DOM.cancelDeleteModalBtn.addEventListener('click', closeDeleteModal);
    DOM.confirmDeleteActionBtn.addEventListener('click', executeDelete);

    // Modal click outside to dismiss
    [DOM.studentFormModal, DOM.studentViewModal, DOM.deleteConfirmModal].forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    });

    // CSV Export
    DOM.navExportBtn.addEventListener('click', () => {
      closeSidebarMobile();
      exportStudentsCSV();
    });

    // Demo Data / Reset Actions
    DOM.navLoadSampleBtn.addEventListener('click', () => {
      closeSidebarMobile();
      state.students = [...INITIAL_SEED_DATA];
      state.selectedStudentIds.clear();
      saveStudents();
      render();
      showToast('Demo records loaded successfully!', 'success');
    });

    DOM.navResetDataBtn.addEventListener('click', () => {
      closeSidebarMobile();
      if (confirm('Are you sure you want to reset the database? This will clear all records.')) {
        state.students = [];
        state.selectedStudentIds.clear();
        saveStudents();
        render();
        showToast('Database reset to empty state.', 'info');
      }
    });

    // Toggle Analytics section
    DOM.toggleAnalyticsBtn.addEventListener('click', () => {
      const isHidden = DOM.analyticsBody.style.display === 'none';
      DOM.analyticsBody.style.display = isHidden ? 'flex' : 'none';
      DOM.toggleAnalyticsText.textContent = isHidden ? 'Hide Insights' : 'Show Insights';
    });

    // Restore saved view preference
    const savedView = localStorage.getItem(VIEW_KEY);
    if (savedView === 'cards') {
      state.viewMode = 'cards';
      DOM.viewModeGrid.classList.add('active');
      DOM.viewModeTable.classList.remove('active');
    }
  }

  // Expose global window helpers for fail-safe access
  window.openDeleteModal = openDeleteModal;
  window.closeDeleteModal = closeDeleteModal;
  window.executeDelete = executeDelete;
  window.openStudentModal = openStudentModal;
  window.closeStudentModal = closeStudentModal;
  window.openViewModal = openViewModal;
  window.closeViewModal = closeViewModal;
  window.toggleTheme = toggleTheme;

  // ==================== INITIALIZATION ====================
  function init() {
    initTheme();
    loadStudents();
    attachEventListeners();
    render();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
