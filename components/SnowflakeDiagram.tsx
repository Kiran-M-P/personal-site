"use client";

export default function SnowflakeDiagram() {
  return (
    <div
      className="font-mono rounded border p-6 md:p-9 max-w-[860px] mx-auto"
      style={{
        background: "#1a1a1a",
        borderColor: "#2d2d2d",
      }}
    >
      {/* header */}
      <div
        className="flex items-center gap-3 mb-7 pb-5 border-b"
        style={{ borderColor: "#2d2d2d" }}
      >
        <span
          className="text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded"
          style={{
            color: "#8a8a8a",
            background: "#222222",
            border: "1px solid #333333",
          }}
        >
          64-bit
        </span>
        <span className="text-[13px] font-medium tracking-wide" style={{ color: "#8a8a8a" }}>
          <span style={{ color: "#e0e0e0" }}>Twitter Snowflake ID</span> — Bit Layout
        </span>
      </div>

      {/* ruler labels */}
      <div className="flex gap-0.5 mb-1.5">
        <div className="flex-1 flex items-center justify-center text-[10px] font-medium tracking-wider pt-1.5 border-t" style={{ color: "#8a8a8a", borderColor: "#333333" }}>
          1
        </div>
        <div className="flex-[41] flex items-center justify-center text-[10px] font-medium tracking-wider pt-1.5 border-t" style={{ color: "#8a8a8a", borderColor: "#333333" }}>
          41
        </div>
        <div className="flex-[10] flex items-center justify-center text-[10px] font-medium tracking-wider pt-1.5 border-t" style={{ color: "#8a8a8a", borderColor: "#333333" }}>
          10
        </div>
        <div className="flex-[12] flex items-center justify-center text-[10px] font-medium tracking-wider pt-1.5 border-t" style={{ color: "#8a8a8a", borderColor: "#333333" }}>
          12
        </div>
      </div>

      {/* main strip */}
      <div className="flex gap-0.5 mb-5">
        <div
          className="flex-1 flex items-center justify-center rounded py-3.5 px-1.5 text-[11px] font-semibold tracking-wider uppercase"
          style={{ background: "#252525", color: "#8a8a8a", border: "1px solid #333333" }}
        >
          0
        </div>
        <div
          className="flex-[41] flex items-center justify-center rounded py-3.5 px-1.5 text-[11px] font-semibold tracking-wider uppercase"
          style={{ background: "#272727", color: "#6b6b6b", border: "1px solid #3a3a3a" }}
        >
          TIMESTAMP
        </div>
        <div
          className="flex-[10] flex items-center justify-center rounded py-3.5 px-1.5 text-[11px] font-semibold tracking-wider uppercase"
          style={{ background: "#252525", color: "#8a8a8a", border: "1px solid #333333" }}
        >
          MACHINE ID
        </div>
        <div
          className="flex-[12] flex items-center justify-center rounded py-3.5 px-1.5 text-[11px] font-semibold tracking-wider uppercase"
          style={{ background: "#242424", color: "#8a8a8a", border: "1px solid #303030" }}
        >
          SEQUENCE
        </div>
      </div>

      {/* bit count */}
      <div className="flex gap-0.5 mb-7">
        <div className="flex-1 flex items-center justify-center text-[10px] py-1 tracking-wide" style={{ color: "#8a8a8a" }}>
          1 bit
        </div>
        <div className="flex-[41] flex items-center justify-center text-[10px] py-1 tracking-wide" style={{ color: "#8a8a8a" }}>
          41 bits
        </div>
        <div className="flex-[10] flex items-center justify-center text-[10px] py-1 tracking-wide" style={{ color: "#8a8a8a" }}>
          10 bits
        </div>
        <div className="flex-[12] flex items-center justify-center text-[10px] py-1 tracking-wide" style={{ color: "#8a8a8a" }}>
          12 bits
        </div>
      </div>

      {/* info blocks */}
      <div className="flex gap-3 flex-wrap">
        <div
          className="flex-1 min-w-[160px] rounded p-4"
          style={{ background: "#222222", border: "1px solid #2d2d2d" }}
        >
          <div
            className="text-[10px] font-bold tracking-widest uppercase mb-2.5 pb-2 border-b"
            style={{ color: "#8a8a8a", borderColor: "#2d2d2d" }}
          >
            Sign Bit
          </div>
          <div className="text-[10.5px] leading-relaxed mb-1 flex gap-1.5 items-start" style={{ color: "#8a8a8a" }}>
            <span style={{ color: "#8a8a8a" }}>›</span>
            Always <span className="font-medium" style={{ color: "#e0e0e0" }}> 0</span>
          </div>
          <div className="text-[10.5px] leading-relaxed flex gap-1.5 items-start" style={{ color: "#8a8a8a" }}>
            <span style={{ color: "#8a8a8a" }}>›</span>
            Ensures positive integers
          </div>
        </div>

        <div
          className="flex-1 min-w-[160px] rounded p-4"
          style={{ background: "#222222", border: "1px solid #2d2d2d" }}
        >
          <div
            className="text-[10px] font-bold tracking-widest uppercase mb-2.5 pb-2 border-b"
            style={{ color: "#8a8a8a", borderColor: "#2d2d2d" }}
          >
            Timestamp
          </div>
          <div className="text-[10.5px] leading-relaxed mb-1 flex gap-1.5 items-start" style={{ color: "#8a8a8a" }}>
            <span style={{ color: "#8a8a8a" }}>›</span>
            Milliseconds since <span className="font-medium" style={{ color: "#e0e0e0" }}> custom epoch</span>
          </div>
          <div className="text-[10.5px] leading-relaxed flex gap-1.5 items-start" style={{ color: "#8a8a8a" }}>
            <span style={{ color: "#8a8a8a" }}>›</span>
            Range: <span className="font-medium" style={{ color: "#e0e0e0" }}> ~69 years</span>
          </div>
        </div>

        <div
          className="flex-1 min-w-[160px] rounded p-4"
          style={{ background: "#222222", border: "1px solid #2d2d2d" }}
        >
          <div
            className="text-[10px] font-bold tracking-widest uppercase mb-2.5 pb-2 border-b"
            style={{ color: "#8a8a8a", borderColor: "#2d2d2d" }}
          >
            Machine ID
          </div>
          <div className="text-[10.5px] leading-relaxed mb-1 flex gap-1.5 items-start" style={{ color: "#8a8a8a" }}>
            <span style={{ color: "#8a8a8a" }}>›</span>
            Unique per server node
          </div>
          <div className="text-[10.5px] leading-relaxed flex gap-1.5 items-start" style={{ color: "#8a8a8a" }}>
            <span style={{ color: "#8a8a8a" }}>›</span>
            Up to <span className="font-medium" style={{ color: "#e0e0e0" }}> 1024</span> machines
          </div>
        </div>

        <div
          className="flex-1 min-w-[160px] rounded p-4"
          style={{ background: "#222222", border: "1px solid #2d2d2d" }}
        >
          <div
            className="text-[10px] font-bold tracking-widest uppercase mb-2.5 pb-2 border-b"
            style={{ color: "#8a8a8a", borderColor: "#2d2d2d" }}
          >
            Sequence
          </div>
          <div className="text-[10.5px] leading-relaxed mb-1 flex gap-1.5 items-start" style={{ color: "#8a8a8a" }}>
            <span style={{ color: "#8a8a8a" }}>›</span>
            Increments per millisecond
          </div>
          <div className="text-[10.5px] leading-relaxed flex gap-1.5 items-start" style={{ color: "#8a8a8a" }}>
            <span style={{ color: "#8a8a8a" }}>›</span>
            Max <span className="font-medium" style={{ color: "#e0e0e0" }}> 4096 IDs/ms</span>
          </div>
        </div>
      </div>

      {/* footer */}
      <div
        className="mt-6 pt-4 border-t flex flex-wrap items-center gap-5 text-[10px] tracking-wide"
        style={{ borderColor: "#2d2d2d", color: "#8a8a8a" }}
      >
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#333333" }} />
          total capacity: 2<sup>63</sup> unique IDs
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#333333" }} />
          time-sortable by default
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#333333" }} />
          no coordination required
        </span>
      </div>
    </div>
  );
}
