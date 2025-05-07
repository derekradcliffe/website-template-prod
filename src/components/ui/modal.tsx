export default function MyModal({ onClose }: { onClose: () => void }) {
    return (
      <div className="absolute bg-black/[.54] w-full h-full top-0 left-0 flex items-center justify-center z-50 cursor-pointer md:p-auto p-10" onClick={onClose} title="Click to Close">
        <div className="modal-content bg-white rounded-lg shadow-lg p-6 relative flex flex-col-reverse cursor-pointer" onClick={onClose} title="Click to Close">
          {/* <span className="order-2 m-2">&times;</span> */}
          <h2 className="font-bold md:text-2xl text-3xl text-center">Form Submitted Successfully!<br />We will reach out shortly!</h2>
          {/* <button onClick={onClose}>Close</button> */}
        </div>
      </div>
    );
  }