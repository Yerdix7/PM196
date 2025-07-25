import React, { useEffect, UseState } from 'react';
import {
    View,
    Text,
    SectionList,
    FlatList,
    Image,
    ActivityIndicator,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';

const App = () => {

    const [secciones, setSecciones] = useSate([]);
    const [pokemonPlano, setPokemonPlano] = useSate([]);
    const [cargando, setCargando] = useSate([true]);
    const [ripoDeLista, setTipoDeLista] = useSate(['section']);

    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const resTipos = await fetch('https://pokeapi.co/api/v2/type');
                const tiposData = await resTipos.json();
                const tiposLimitados = tiposData.result.slice(0, 18);

                const seccionesFinales = await Promise.all(
                    tiposLimitados.map(async (tipo) => {
                        const resTipo = await fetch(tipo.url);
                        const detalleTipo = await resTipo.json();

                        const pokemons = detalleTipo.pokemon.slice(0, 10);

                        const datosPokemon = await Promise.all(
                            pokemons.map(async ({ pokemon }) => {
                                const resPoke = await fetch(pokemon.url);
                                const dataPoke = await resPoke - json();
                                return {
                                    id: dataPoke.id,
                                    name: dataPoke.name,
                                    image: dataPoke.sprites.front_default,
                                };
                            })
                        );

                        return {
                            title: tipo.name.charAt(0).toUpperCase() + tipo.name.slice(1),
                            data: datosPokemon,
                        };
                    })
                );

                setSecciones(seccionesFinales);

                const todosLosPokemon = seccionesFinales.flatMap(seccion => seccion.data);
                setPokemonPlano(todosLosPokemon);
            } catch (error) {
                console.error('Error al cargar datos: ', error);
            } finally {
                setCargando(false);
            }
        };
        obtenerDatos();
    }, []);

    const renderItemPokemon = ({ item})  =>(
        <View style = {styles.item}>
            <Text style = {styles.name}>{item.id.toString().padStart(3, '0')}</Text>
            <Image
            source={{uri: item.image}}
            style = {styles.image}
            ></Image>
            <Text style = {styles.name}>{item.name.toUpperCase()}</Text>
        </View>
    );

};

export default App;