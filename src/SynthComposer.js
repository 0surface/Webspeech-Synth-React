import { useMemo, useContext } from 'react'
import Context from './Context'
import createSynth from './createSynth'

const SynthComposer = ({ synth }, children) => {
  const { synth: parentSynth, synthesize: parentSynthesize } =
    useContext(Context) || {}

  const context = useMemo(() => {
    synth, synthesize
  }, [synth, synthesize])

  return (
    <Context.Provider value={context}>
      {typeof children === 'function' ? (
        <Context.Consumer>{(context) => children(context)}</Context.Consumer>
      ) : (
        children
      )}
    </Context.Provider>
  )
}

export default SynthComposer
