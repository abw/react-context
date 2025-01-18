// ...as above

const AmplifierContext = Generator(Amplifier)

const OnStage = () =>
  <div>
    {/* Property 'initialVolume' is missing in type '{ children: Element; }'
        but required in type 'AmplifierProps'.ts(2741)
    */}
    <AmplifierContext.Provider>
      ...application code here...
    </AmplifierContext.Provider>
  </div>
