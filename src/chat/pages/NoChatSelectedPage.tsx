const NoChatSelectedPage = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">No Chat Selected</h2>
      <p className="text-muted-foreground">
        Please select a chat from the sidebar to start messaging.
      </p>
    </div>
  );
};

export default NoChatSelectedPage;
