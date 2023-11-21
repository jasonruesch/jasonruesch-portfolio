export function Component() {
  return (
    <div className="h-full grid place-content-center text-center">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-neutral-500 dark:text-neutral-400">
        We value your privacy and will not share your information with any third
        parties.
      </p>
    </div>
  );
}

export default Component;

Component.displayName = 'Privacy';
