import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  getPopularMovies,
  getUpcomingMovies,
  getPopularTV,
  getFamilyMovies,
  getDocumentaries,
  getMovieDetail,
} from '../services/services';
import { SliderBox } from 'react-native-image-slider-box';
import List from '../components/List';
import Error from '../components/Error';

const dimensions = Dimensions.get('screen');
const Home = ({ navigation }) => {
  const [upcomingMovies, setUpcomingMovies] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTV, setPopularTV] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [documentaryMovies, setDocumentaryMovies] = useState();

  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTV(),
      getFamilyMovies(),
      getDocumentaries(),
    ]);
  };
  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMoviesData,
          popularMoviesData,
          popularTVData,
          familyMoviesData,
          documentaryMoviesData,
        ]) => {
          const moviesImagesArray = [];
          upcomingMoviesData.forEach(movie => {
            moviesImagesArray.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });

          setUpcomingMovies(moviesImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTV(popularTVData);
          setFamilyMovies(familyMoviesData);
          setDocumentaryMovies(documentaryMoviesData);
        },
      )
      .catch(() => setError(true))
      .finally(() => setLoaded(true));
  }, []);

  return (
    <React.Fragment>
      {loaded && !error && (
        <ScrollView>
          {/* upcoming movies slider box */}
          {upcomingMovies && (
            <View style={styles.container}>
              <SliderBox
                images={upcomingMovies}
                autoplay={true}
                circleLoop={true}
                sliderBoxHeight={dimensions.height / 1.5}
                dotStyle={styles.sliderStyle}
              />
              {error && (
                <Text style={{ color: 'red' }}>Error fetching movies</Text>
              )}
            </View>
          )}
          {/* Popular Movies */}
          {popularMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Popular Movies"
                content={popularMovies}
              />
            </View>
          )}
          {/* Popular TV */}
          {popularTV && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Popular TV"
                content={popularTV}
              />
            </View>
          )}
          {/* Documentaries */}
          {documentaryMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Documentaries"
                content={documentaryMovies}
              />
            </View>
          )}
          {/* Family Mobvies */}
          {familyMovies && (
            <View style={styles.carousel}>
              <List
                navigation={navigation}
                title="Family Movies"
                content={familyMovies}
              />
            </View>
          )}
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" color="#00ff00" />}
      {error && <Error />}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
