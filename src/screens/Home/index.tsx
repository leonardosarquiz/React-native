import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../components/Participant';


export default function Home() {

  const participantes = ["Rodrigo", "Pedro", "Diego", "Ana", "jack", "Mayk", "Leonardo", "João", "Matheus", "Junior"]


  function handleParticipantAdd() {
    if (participantes.includes("Rodrigo")) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome")
    }

  }

  function handleParticipantRemove(name: string) {

    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: "cancel"
      }
    ])

  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />


        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>


      <FlatList data={participantes} keyExtractor={item => item} renderItem={({ item }) => (
        <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
      )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />




    </View>
  )
}