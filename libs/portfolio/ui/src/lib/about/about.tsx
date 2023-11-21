export function Component() {
  return (
    <div className="h-full grid place-content-center text-center">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-neutral-500 dark:text-neutral-400">
        Hi, my name is Jason Ruesch.
      </p>
    </div>
  );
}

export default Component;

Component.displayName = 'About';
