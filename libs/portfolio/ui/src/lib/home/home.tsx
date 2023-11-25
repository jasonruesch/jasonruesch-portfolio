export function Component() {
  return (
    <div className="h-full grid place-content-center text-center">
      <h1 className="text-4xl font-bold mb-4">Jason Ruesch</h1>
      <p className="text-neutral-500 dark:text-neutral-400">
        Software Engineer with focus on Web Development and Design
      </p>

      <div className="mt-8 space-x-2">
        <button className="btn-primary btn-small">Primary Small</button>
        <button className="btn-primary">Primary</button>
      </div>
      <div className="mt-4 space-x-2">
        <button className="btn-secondary btn-small">Secondary Small</button>
        <button className="btn-secondary">Secondary</button>
      </div>
    </div>
  );
}

Component.displayName = 'Home';
