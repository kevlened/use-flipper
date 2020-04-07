import React, {
	useMemo,
	useCallback,
	useState,
	useContext,
  useEffect,
  useRef
} from 'react';

const FlipperContext = React.createContext();

// Attach once, to the root
export function Provider({children}) {
  // Render ids
  const [ids, setIds] = useState([]);

  // Need to have stable ids to have the labels rehydrate properly
  const count = useRef(0);
  const nextId = useCallback(() =>
    'use-flipper-' + count.current++
  , [count]);

	const addId = useCallback(id => setIds(prev => prev.concat([id])), [setIds]);
	const removeId = useCallback(id => setIds(prev => {
		const clone = prev.concat([]);
		clone.splice(clone.indexOf(id), 1);
		return clone;
	}), [setIds]);

	return (
		<FlipperContext.Provider value={{addId, removeId, nextId}}>
			{ids.map(id => (
				<React.Fragment key={id + '-style'}>
					<style global jsx>{`
						#${id} {
							display: none;
						}
            
            #${id}:checked~div #${id}-on {
							display: block !important;
						}
			
						#${id}:checked~div #${id}-off {
							display: none;
						}
					`}</style>
					<input type='checkbox' id={id} />
				</React.Fragment>
			))}
			{children}
		</FlipperContext.Provider>
	);
}

export function useFlipper({id} = {}) {
  const {addId, removeId, nextId} = useContext(FlipperContext);
  const fId = useMemo(() => id || nextId(), [id, nextId]);
  
	useEffect(() => {
		addId(fId);
		return () => removeId(fId);
	}, [fId]);

	const Flipper = useCallback(({children}) => (
		<label htmlFor={fId}>{children}</label>
  ), [fId]);

  // If we don't use display: none, FlippedOn will flash on load.
  // If we return null, React will reconcile FlippedOn as FlippedOff when we rehydrate
	const FlippedOn = useCallback(({children}) => (
    <div id={fId + '-on'} style={{display: 'none'}}>{children}</div>
	), [fId]);

	const FlippedOff = useCallback(({children}) => (
		<div id={fId + '-off'}>{children}</div>
  ), [fId]);

	return {Flipper, FlippedOn, FlippedOff};
}
