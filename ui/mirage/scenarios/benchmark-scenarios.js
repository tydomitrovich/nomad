export function uxrTask0(server) {
  // !! Needs a corresponding job file
  server.createList('agent', 3);
  server.createList('node', 5);
  server.createList('job', 5, { status: 'running', ratio: '10: R 1' });
  server.create('job', { status: 'running', ratio: '5: R 1 C 4' });
  server.create('job', { status: 'running', ratio: '10: R 5 F 1 L 1' });
  server.create('job', { status: 'dead', ratio: '10: C 1' });
  server.create('job', {
    id: 'web-server',
    status: 'running',
    ratio: '5: R 1',
  });
}

export function uxrTask1a(server) {
  server.createList('agent', 3);
  server.createList('node', 5, 'forceAllDrivers');

  server.create('job', {
    id: 'web-server',
    status: 'running',
    groupsCount: 1,
    ratio: '50: S 1 R 4 C 1',
    createAllocations: false,
    noFailedPlacements: true,
  });

  server.createList('allocation', 4, {
    jobId: 'web-server',
    clientStatus: 'running',
    jobVersion: 1,
  });

  server.create('allocation', 'rescheduled', {
    jobId: 'web-server',
    clientStatus: 'completed',
    rescheduleStatus: 'starting',
    jobVersion: 1,
  });
}

export function uxrTask2a(server) {
  server.createList('agent', 3);
  server.createList('node', 5, 'forceAllDrivers');

  server.create('job', {
    id: 'web-server',
    status: 'running',
    groupsCount: 1,
    ratio: '3: R 1',
    createAllocations: false,
    noFailedPlacements: true,
    noDeployments: true,
  });

  server.createList('allocation', 2, {
    jobId: 'web-server',
    clientStatus: 'running',
    jobVersion: 1,
  });

  server.create('allocation', 'highUsage', {
    jobId: 'web-server',
    clientStatus: 'running',
    jobVersion: 1,
  });
}

export function uxrTask2b(server) {
  server.createList('agent', 3);
  server.createList('node', 5, 'forceAllDrivers');

  server.create('job', {
    id: 'web-server',
    status: 'running',
    groupsCount: 1,
    ratio: '3: R 1',
    createAllocations: false,
    noFailedPlacements: true,
    noDeployments: true,
  });

  server.createList('allocation', 2, {
    jobId: 'web-server',
    clientStatus: 'running',
    jobVersion: 1,
  });

  server.create('allocation', 'highUsage', {
    jobId: 'web-server',
    clientStatus: 'starting',
    jobVersion: 1,
  });
}

export function uxrTask2c(server) {
  server.createList('agent', 3);
  server.createList('node', 5, 'forceAllDrivers');

  server.create('job', {
    id: 'web-server',
    status: 'running',
    groupsCount: 1,
    ratio: '3: R 1',
    createAllocations: false,
    noFailedPlacements: true,
    noDeployments: true,
  });

  server.createList('allocation', 2, {
    jobId: 'web-server',
    clientStatus: 'running',
    jobVersion: 1,
  });

  server.create('allocation', {
    jobId: 'web-server',
    clientStatus: 'running',
    jobVersion: 1,
  });
}
export function uxrTask3a(server) {
  // !! Needs logs to be mocked on the stderr tab
  // No data path specified for data migration. Set the DATA_PATH env var.
  //
  // exit 1
  server.createList('agent', 3);
  server.createList('node', 5, 'forceAllDrivers');

  server.createList('job', 3, { status: 'running', ratio: '10: R 1' });
  server.create('job', { status: 'running', ratio: '10: R 1 C 2' });
  server.create('job', { status: 'running', ratio: '10: S 1 R 2 C 2' });
  server.create('job', {
    id: 'data-migrate',
    status: 'dead',
    type: 'batch',
    ratio: '1: F 1',
    noFailedPlacements: true,
    noDeployments: true,
    createAllocations: false,
  });

  server.create('allocation', {
    jobId: 'data-migrate',
    clientStatus: 'failed',
    jobVersion: 1,
  });
}