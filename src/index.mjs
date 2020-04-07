import React, {
	useMemo,
	useCallback,
	useState,
	useContext,
	useEffect
} from 'react';

const isServer = typeof window === 'undefined';
const FlipperContext = React.createContext();

// Attach once, to the root
export function Provider({children}) {
	// Render ids
  const state = useState([]);
  const ids = state[0];
  const setIds = state[1];
	
	const addId = useCallback(id => setIds(prev => prev.concat([id])), [setIds]);
	const removeId = useCallback(id => setIds(prev => {
		const clone = prev.concat([]);
		clone.splice(clone.indexOf(id), 1);
		return clone;
	}), [setIds]);

	return (
		<FlipperContext.Provider value={{addId, removeId}}>
			{ids.map(id => (
				<>
					<style global jsx>{`
						#${id} {
							display: none;
						}
		
						#${id}:not(:checked)~div #${id}-on {
							display: none;
						}
			
						#${id}:checked~div #${id}-off {
							display: none;
						}
					`}</style>
					<input type='checkbox' id={id} />
				</>
			))}
			{children}
		</FlipperContext.Provider>
	);
}

export function useFlipper({id} = {}) {
	const fId = useMemo(() =>
		'uf-' + (id || Math.random().toString().replace('.', ''))
	, [id]);
		
	const {addId, removeId} = useContext(FlipperContext);
	useEffect(() => {
		addId(fId);
		return () => removeId(fId);
	}, [fId]);

	const Flipper = useCallback(({children}) => isServer ? null :
		<label for={fId}>{children}</label>
	, [fId]);

	const FlippedOn = useCallback(({children}) => (
		<div id={fId + '-on'}>{children}</div>
	), [fId]);

	const FlippedOff = useCallback(({children}) => isServer ? null : (
		<div id={fId + '-off'}>{children}</div>
	), [fId]);

	return {Flipper, FlippedOn, FlippedOff};
}
