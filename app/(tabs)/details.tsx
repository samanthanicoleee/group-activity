import { router, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ScheduleItem {
  day: string;
  time: string;
  subject: string;
  description: string;
  instructor: string;
  room: string;
}

const scheduleData: Record<string, ScheduleItem[]> = {
  
  '4a': [
    {
      day: 'TTH',
      time: '9:30 AM - 11:00 AM',
      subject: 'Free Elec. 103 / LEC/LAB',
      description: 'System Administration & Maintenance',
      instructor: 'Mr. Javier',
      room: 'LAB 1',
    },
    {
      day: 'TTH',
      time: '10:30 AM - 12:00 PM',
      subject: 'Soc. Sci. 104',
      description: 'Politics & Governance (w/ Phil. Const.)',
      instructor: 'Mr. Buntaguer',
      room: 'L14',
    },
    {
      day: 'MWF',
      time: '1:00 PM - 2:30 PM',
      subject: 'Humanities 102',
      description: 'Logic',
      instructor: 'Mr. Dumayac',
      room: '301',
    },
    {
      day: 'MWF',
      time: '2:30 PM - 4:30 PM',
      subject: 'Free Elec. 104 / LEC/LAB',
      description: 'Integrative Programming & Technologies 2',
      instructor: 'TBA',
      room: 'TBA',
    },
    {
      day: 'TTH',
      time: '12:30 PM - 2:00 PM',
      subject: 'ITEC 111',
      description: 'Capstone Project 1 / IT Research 1',
      instructor: 'Mr. Lavador',
      room: '201/200',
    },
    {
      day: 'TTH',
      time: '2:00 PM - 4:00 PM',
      subject: 'Free Elec. 102 / LEC/LAB',
      description: 'Information Assurance & Security 2',
      instructor: 'TBA',
      room: 'TBA',
    },
  ],

  '4e': [
    {
      day: 'MWF',
      time: '8:30 AM - 9:30 AM',
      subject: 'Soc. Sci. 104',
      description: 'Politics & Governance (w/ Phil. Const.)',
      instructor: 'Mr. Thadeus',
      room: 'TBA',
    },
    {
      day: 'MWF',
      time: '10:30 AM - 12:30 PM',
      subject: 'Free Elec. 104 / LEC/LAB',
      description: 'Integrative Programming & Technologies 2',
      instructor: 'TBA',
      room: 'TBA',
    },
    {
      day: 'MWF',
      time: '1:00 PM - 2:00 PM',
      subject: 'ITM 100',
      description: 'Capstone Project 1 / IT Research 1',
      instructor: 'Mr. Lavador',
      room: '108',
    },
    {
      day: 'MWF',
      time: '2:00 PM - 3:00 PM',
      subject: 'Humanities 102',
      description: 'Logic',
      instructor: 'Ms. Perez C.',
      room: 'TBA',
    },
    {
      day: 'TTH',
      time: '7:30 AM - 9:30 AM',
      subject: 'ITM 112 / LEC/LAB',
      description: 'Information Assurance & Security 2',
      instructor: 'TBA',
      room: 'TBA',
    },
    {
      day: 'TTH',
      time: '9:30 AM - 11:30 AM',
      subject: 'ITM 110 / LEC/LAB',
      description: 'System Administration & Maintenance',
      instructor: 'TBA',
      room: 'TBA',
    },
  ],
  '4f': [
    {
      day: 'MWF',
      time: '9:30 AM - 10:30 AM',
      subject: 'Soc. Sci. 104',
      description: 'Politics & Governance (w/ Phil. Const.)',
      instructor: 'Mr. Thadeus',
      room: '311',
    },
    {
      day: 'MWF',
      time: '11:30 AM - 12:30 PM',
      subject: 'Humanities 102',
      description: 'Logic',
      instructor: 'Ms. Perez C.',
      room: '101',
    },
    {
      day: 'MWF',
      time: '1:00 PM - 3:00 PM',
      subject: 'ITM 110 / LEC/LAB',
      description: 'System Administration & Maintenance',
      instructor: 'TBA',
      room: 'TBA',
    },
    {
      day: 'MWF',
      time: '3:00 PM - 4:00 PM',
      subject: 'ITM 100',
      description: 'Capstone Project 1 / IT Research 1',
      instructor: 'Mr. Lavador',
      room: 'TBA',
    },
    {
      day: 'TTH',
      time: '7:30 AM - 9:30 AM',
      subject: 'Free Elec. 104 / LEC/LAB',
      description: 'Integrative Programming & Technologies 2',
      instructor: 'Mr. Omecello',
      room: 'TBA',
    },
    {
      day: 'TTH',
      time: '9:30 AM - 11:30 AM',
      subject: 'ITM 112/ LEC/LAB',
      description: 'Information Assurance & Security 2',
      instructor: 'Mr. Omecello',
      room: 'TBA',
    },
    {
      day: 'S',
      time: '1:00 PM - 5:00 PM',
      subject: 'ITM 110 / LEC/LAB',
      description: 'System Administration & Maintenance ',
      instructor: 'Mr. Lato',
      room: 'TBA',
    },
  ],
  '4g': [
    {
      day: 'MWF',
      time: '11:30 AM - 12:30 PM',
      subject: 'Soc. Sci. 104',
      description: 'Social Science',
      instructor: 'Ms. Alapera',
      room: 'TBA',
    },
    {
      day: 'TTH',
      time: '12:30 PM - 2:30 PM',
      subject: 'Free Elec. 104',
      description: 'Integrative Programming & Technologies 2',
      instructor: 'Mr. Omecillo',
      room: 'TBA',
    },
    {
      day: 'TTH',
      time: '2:30 PM - 3:30 PM',
      subject: 'HUM 102',
      description: 'Humanities 102',
      instructor: 'Ms. Batoon',
      room: 'TBA',
    },
    {
      day: 'MW',
      time: '2:30 PM - 4:30 PM',
      subject: 'Free Elec. 102',
      description: 'Information Assurance & Security 2',
      instructor: 'Mr. Enriquez',
      room: 'TBA',

    },
    {
      day: 'S',
      time: '8:30 AM - 12:00 PM',
      subject: 'ITM 100',
      description: 'Capstone Project 1 / IT Research 1 ',
      instructor: 'Mr. Lavador',
      room: 'TBA',
      
    },
     {
      day: 'S',
      time: '12:30 PM - 4:30 PM',
      subject: 'ITM 110 / LEC/LAB',
      description: 'System Administration & Maintenance ',
      instructor: 'Mr. Javier',
      room: 'TBA',
       },
  ],
     
      '4i': [
    {
      day: 'MWF',
      time: '7:30 AM - 9:30 AM',
      subject: 'Free Elec. 102 / LEC/LAB',
      description: 'Information Assurance & Security 2',
      instructor: 'TBA',
      room: 'TBA',
    },
    {
      day: 'TTH',
      time: '10:30 AM - 12:00 PM',
      subject: 'Soc. Sci. 104',
      description: 'Politics & Governance (w/ Phil. Const.)',
      instructor: 'TBA',
      room: 'TBA',
    },
    {
      day: 'MWF',
      time: '1:00 PM - 2:00 PM',
      subject: 'Humanities 102',
      description: 'Logic',
      instructor: 'TBA',
      room: 'TBA',
    },
    {
      day: 'MWF',
      time: '2:00 PM - 4:00 PM',
      subject: 'Free Elec. 103 / LEC/LAB',
      description: 'System Administration & Maintenance',
      instructor: 'TBA',
      room: 'TBA',
    },
  ],
    }

export default function DetailsScreen() {
  const { sectionId } = useLocalSearchParams();
  const currentSection = typeof sectionId === 'string' ? sectionId.toLowerCase() : '4e';
  const classList = scheduleData[currentSection];

  useEffect(() => {
    console.log(`Details screen loaded for section: ${currentSection}`);
  }, [currentSection]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Back to Sections</Text>
      </TouchableOpacity>

      <Text style={styles.headerTitle}>
        BSIT {currentSection.toUpperCase()} Class Schedule
      </Text>
      <Text style={styles.subTitle}>School Year 2026 - 2027 | 1st Semester</Text>

      {classList ? (
        classList.map((item, index) => (
          <View key={index} style={styles.scheduleCard}>
            <View style={styles.badgeRow}>
              <Text style={styles.dayBadge}>{item.day}</Text>
              <Text style={styles.timeText}>🕒 {item.time}</Text>
            </View>
            <Text style={styles.subjectText}>{item.subject}</Text>
            <Text style={styles.descText}>{item.description}</Text>
            <Text style={styles.infoText}>👨‍🏫 Instructor: {item.instructor}</Text>
            <Text style={styles.infoText}>🏫 Room: {item.room}</Text>
          </View>
        ))
      ) : (
        <View style={styles.placeholderCard}>
          <Text style={styles.placeholderText}>
            No schedule found for section {currentSection.toUpperCase()}.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#F4F6F9',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  backText: {
    color: '#0056B3',
    fontWeight: 'bold',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E293B',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    marginBottom: 20,
  },
  scheduleCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#0056B3',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  dayBadge: {
    backgroundColor: '#0056B3',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0056B3',
  },
  subjectText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  descText: {
    fontSize: 13,
    color: '#334155',
    marginBottom: 6,
    fontStyle: 'italic',
  },
  infoText: {
    fontSize: 13,
    color: '#475569',
    marginTop: 2,
  },
  placeholderCard: {
    backgroundColor: '#E2E8F0',
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderStyle: 'dashed',
    marginTop: 20,
  },
  placeholderText: {
    textAlign: 'center',
    color: '#475569',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
});